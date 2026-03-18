import { FollowerPointerCard } from "./ui/following-pointer";

export default function FollowingPointerDemo() {
  return (
    <div className="mx-auto w-80 py-12">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl dark:bg-slate-900 dark:border-slate-800">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 dark:bg-slate-800">
            <img
              src={blogContent.image}
              alt="thumbnail"
              className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-700 dark:text-slate-200">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500 dark:text-slate-400">
              {blogContent.description}
            </h2>
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-slate-500">{blogContent.date}</span>
              <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white dark:bg-primary-600">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "mastering-3d-animation-maya",
  author: "WRF",
  date: "17th March, 2026",
  title: "Mastering 3D Animation with Maya",
  description:
    "Dive deep into the world of 3D animation. Learn how to bring characters to life using industry-standard tools and techniques used in major film studios.",
  image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  authorAvatar: "https://i.pravatar.cc/150?u=manu",
};

const TitleComponent = ({
  title,
}: {
  title: string;
}) => (
  <div className="flex items-center space-x-2">
    <p>{title}</p>
  </div>
);
