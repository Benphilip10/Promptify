import Link from 'next/link';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-col flex-start'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>  

      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, let your imagination come alive with any AI powered platform.
      </p>

      <form
      onSubmit={handleSubmit}
      className='glassmorphism mt-10 w-full max-w-2xl flex-col flex gap-10'
      >
        <label>
            <span className='font-satoshi text-base font-semibold text-gray-700'>
              Your AI Prompt
            </span>

        <textarea 
        required
        value={post.prompt}
        className='form_textarea'
        placeholder='Write your prompt here...'
        onChange={(e) => setPost({ ...post, prompt:e.target.value})}
       />
        </label>
       
        <label>
            <span className='font-satoshi text-base font-semibold text-gray-700'>
              Tag{' '} <span className='font-normal text-sm'>(#webdevelopment, #coding, #product)</span>
            </span>
        
        <input
        required
        value={post.tag}
        className='form_input'
        placeholder='#tag...'
        onChange={(e) => setPost({ ...post, tag:e.target.value})}
        />
        </label>

        <div className='flex flex-end mx-3 mb-5 gap-4'>

          <Link href='/' className='text-sm text-gray-500'>
          Cancel
          </Link>

          <button
          type= "submit"
          disabled={submitting}
          className='px-8 py-2 text-sm bg-primary-orange rounded-full text-white hover:drop-shadow-lg'
          >
          {submitting? `${type}...` : type}
          </button>

        </div>

      </form>

    </section>
  )
}

export default Form