import Router from 'next/router';

export default () => {
  return (
    <>
    <div className="landing">
      <div className="landing-nav">
        <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="46" height="44" rx="11" fill="#9F9DB9"/>
          <path d="M27.2583 18.8975L23.9893 28H22.3008L19.0889 18.8975H20.7393L22.9863 25.8037C23.0583 26.0238 23.1133 26.2798 23.1514 26.5718H23.1768C23.2064 26.3306 23.2677 26.0703 23.3608 25.791L25.6587 18.8975H27.2583Z" fill="#2B2A3C"/>
        </svg>
        <a href="https://voxel.bar/developers/" className="text-white transform translate-x-5 hover:text-voxel-link text-lg">Developers</a>
        <button className="absolute right-0 transform -translate-x-cog text-white font-bold bg-voxel-link hover:bg-voxel-link-default py-2 px-4 rounded" onClick={() => Router.push('/rooms/me')}>Open</button>
      </div>
      <div className="static flex flex-col w-3/5 z-1">
        <div className="margin-0 text-center flex-shrink-0 flex flex-col items-center pt-150 pl-150 top-0">
          <img src="/soon.png"  />
        </div>
      </div>
    </div>
    </>
  )
}