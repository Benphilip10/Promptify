import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-col w-full flex-center">
    
    <h1 className="head_text text-center"> Discover and Share
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center"> AI Powered Prompts</span>
    </h1>

    <p className="text-center desc">
        Promptify is an AI powered open-source tool for modern users to discover, create and share creative prompts.
    </p>

    <Feed/>
    </section>
  )
}

export default Home