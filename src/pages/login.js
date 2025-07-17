export default function Login() {
  return (
    <div className="bg-[url('/assets/loginBg.png')] bg-cover bg-no-repeat bg-center h-screen w-full">
      <div className="relative h-screen w-full">
        <div className="
          absolute 
          left-[60%] top-[20%]
          max-sm:left-1/2 max-sm:top-1/2 
          max-sm:-translate-x-1/2 max-sm:-translate-y-1/2
          w-[350px] h-auto p-4 rounded shadow-lg
          flex flex-col items-center justify-center 
        ">
          <img
            src="/assets/loginLogo.png"
            alt="Logo"
            className="mb-4 w-24 h-24 object-contain"
          />
          <div className="text-black text-lg bg-gray-200 rounded-2xl p-4 w-full">
            <p className="text-center">Welcome to Astronaut VR</p>
            <p className="py-3">Log in</p>
            <input
              type="text"
              className="my-3 py-1.5 w-full border-2 px-3"
              placeholder="Email"
            />
            <input
              type="password"
              className="my-3 py-1.5 w-full border-2 px-3"
              placeholder="Password"
            />
            <button className="bg-black text-white w-full p-2 font-semibold text-sm rounded-lg">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
