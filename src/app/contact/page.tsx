export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-20 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white" />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-800 text-white h-32"></textarea>
        <button className="bg-pink-500 py-3 rounded text-white font-bold hover:bg-pink-600 transition">
          Send
        </button>
      </form>
    </div>
  );
}
