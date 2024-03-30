import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();
  const currentDate = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  const currentTime = now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div
          className="flex h-full flex-col justify-between
         max-md:px-5 max-md:py-8 lg:p-11"
        >
          <h2
            className="glassmorphism max-w-[270px] rounded py-2 
          text-center text-base font-normal"
          >
            Upcoming Meeting at: 10:00 AM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {currentDate}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />

    </section>
  );
};

export default Home;