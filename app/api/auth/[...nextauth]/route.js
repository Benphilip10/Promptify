 import NextAuth from "next-auth/next";
 import GoogleProvider from "next-auth/providers/google";

 //the handler const handles the authentication
 const handler = NextAuth({
    providers:[
    GoogleProvider({
        clientId : process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
    ],

    async session ({session}){

    },

    async signOut ({profile}) {

    }
})  

export {handler as GET, handler as POST};