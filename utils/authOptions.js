import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in 
    async signIn({ profile }) {
      // 1. connect to the database 
      await connectDB();

      // 2. check if logged in user exists 
      const userExists = await User.findOne({ email: profile.email });

      // 3. Else add user to database 
      if (!userExists) {
        // base username from profile name (truncate if too long)
        let baseUsername = profile.name.slice(0, 20).replace(/\s+/g, "").toLowerCase();
        let username = baseUsername;
        let i = 1;

        // ensure username is unique in DB
        while (await User.findOne({ username })) {
          username = `${baseUsername}${i++}`;
        }

        // create new user in DB
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      // 4. return true to allow signin 
      return true;
    },

    // modifies the session object 
    async session({ session }) {
      // 1. Get user from database 
      const user = await User.findOne({ email: session.user.email });

      // 2. Assign the user id to the session
      session.user.id = user._id.toString();

      // 3. Return session to NextAuth
      return session;
    },
  },
};
