function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center text-white">
      <div
        className="absolute text-center"
        style={{
          top: '12%', // Move farther up by adjusting this value
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Brian's Portfolio</h1>
        {/* <p className="text-2xl">This is the Home page.</p> */}
      </div>
    </div>
  );
}

export default Home;
