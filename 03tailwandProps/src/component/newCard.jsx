import React from "react";

function Card({ username, object={}, object2 ={} }) {
 
  const displayName=username|| object.name ||"Unknown User"
  const displayLocation=object.location || object2.location || "Unknown"
  const displayDetails= object.discription || object2.text || "Unknown"
  // console.log(object2.img)
  const displayImage=  object.img ||object2.img
  return (
    <>
      {/* <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="/img1.jpg" />
        </div>
        <div class="flex">
          <span class="text-2xl font-medium">{productname}</span>
          <span class>{shirt}</span>
          <span class="flex">
            <span>{desciption}</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div> */}

      
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img src={displayImage} className="shadow-xl rounded-full align-middle border-none  -m-16 -ml-20 lg:-ml-16 max-w-[150px]  " />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                  <span className="text-sm text-slate-400">Photos</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                  <span className="text-sm text-slate-400">Followers</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                  <span className="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{displayName}</h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{displayLocation}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">{displayDetails}</p>
                <a href="javascript:;" className="font-normal text-slate-700 hover:text-slate-400">Follow Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer className="relative pt-6 pb-2 mt-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Tailwind CSS Component from <a href="https://www.creative-tim.com/product/notus-design-system-pro?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-500" target="_blank">Notus PRO Html</a> by <a href="https://www.creative-tim.com" className="text-slate-700 hover:text-slate-500" target="_blank"> Creative Tim</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Card




