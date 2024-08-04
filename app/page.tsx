import {
  InputDataButton,
  LoginButton,
} from "@/app/components/NavigationButtons";

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 py-4" />

          <div className="w-full md:w-1/2 text-center  justify-between border-solid border-2 border-sky-500 py-4">
            <LoginButton />
            <button className="bg-orange-500 hover:bg-orange-700 size-4/12 h-10 text-white rounded mx-2">
              Create New User
            </button>
            <div className=" h-1/3  text-center py-4">
              <p className="w-full ">Or just input data to test application</p>
            </div>

            <div className=" text-white text-center py-4">
              <InputDataButton />
            </div>
          </div>
          <div className="w-full md:w-1/4 py-4" />
        </div>
      </div>
    </>
  );
}
