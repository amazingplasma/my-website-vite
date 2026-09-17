

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="max-w-7xl mx-auto px-4 pt-16 w-full">
        <div className="bg-white rounded-xl border border-gray-200 shadow-md">
          <h2 class="text-4xl items-center flex justify-center w-300 h-30">
           Hello! My name is Lance Langlois
          </h2>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">

  <main className="max-w-7xl mx-auto px-4 w-full">
  <div className="col-span-2">
    <div className="min-h-[400px] border border-gray-300 p-6 rounded-xl">
      <p className="mt-6">
        ABOUT ME
      </p>
    </div>
  </div>

  
  <div className="col-span-1 space-y-6">
    <div className="min-h-[190px] border border-gray-300 p-6 rounded-xl">
      <h5 className="text-2xl font-semibold">
        Projects
      </h5>

      <p className="mt-6">
        PROJECTS
      </p>
    </div>

    
    <div className="min-h-[190px] border border-gray-300 p-6 rounded-xl">
      <h5 className="text-2xl font-semibold">
        Experience
      </h5>
    </div>

    

  </div>

  </main>

</div>

</div>

  );
}


export default App; 

