const dashboards = [
   {
      id: 'project-management-1',
      name: 'Project Management 1',
      path: 'https://dashkit-project-management-1.vercel.app/',
   },
];

const ItemList = () => {
   return (
      <div className="relative w-full flex flex-col md:flex-row mb-6">
         {dashboards.map((item, i) => (
            <a
               className="flex flex-col grid-item w-1/3"
               href={item.path}
               key={i}
            >
               <div className="bg-[url(https://placehold.co/200x160)] h-[250px] w-full bg-no-repeat bg-cover bg-center rounded-lg shadow-lg"></div>
               <div className="text-left pt-3">
                  <h2 className="text-white font-sans">{item.name}</h2>
               </div>
            </a>
         ))}
      </div>
   );
};

export default ItemList;
