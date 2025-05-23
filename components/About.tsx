
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-bold mb-8">About Our Technology</h2>
            <p className="text-lg text-gray-600 mb-6">
              We combine state-of-the-art language models with your database to create an intelligent chat interface that understands your data context.
            </p>
            <p className="text-lg text-gray-600">
              Our RAG system ensures accurate responses by retrieving relevant information from your database before generating answers.
            </p>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Secure</h4>
                <p className="text-gray-600">Your data stays private and secure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Fast</h4>
                <p className="text-gray-600">Real-time responses and updates</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Accurate</h4>
                <p className="text-gray-600">Contextual and precise answers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Scalable</h4>
                <p className="text-gray-600">Grows with your data needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
