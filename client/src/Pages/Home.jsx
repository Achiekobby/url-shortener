import Card from './../components/Card';
export default function Home() {
  return (
    <>
      <div className="p-3 max-w-4xl mx-auto rounded-lg mt-10 bg-white">
        <div className="p-3 max-w-xl text-center mx-auto leading-5">
          <h1 className="text-md font-medium text-center my-7 md:text-4xl leading-5">
            Shorten Your <span className="text-blue-600">Looooong</span> URLs
            Like Never Before
          </h1>
        </div>

        <form className="flex flex-col gap-4 max-w-xl mx-auto">
          <input type="urlInput" name="url" placeholder="Enter your URL..." className="border p-3 rounded-lg" />
          <button type="submit" className="p-3 text-white bg-blue-700 hover:opacity-80 uppercase rounded-lg mt-5 mb-5">shorten url</button>
        </form>
      </div>

      <div className="mx-auto max-w-4xl flex gap-5 flex-wrap mt-10">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  );
}
