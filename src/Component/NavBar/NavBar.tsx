import * as React from 'react';
// import LeftNav from './LeftNav'; // Import LeftNav
import RightNav from './RightNav'; 



const Navbar: React.FC = () => {
  const [ladderOpen, setLadderOpen] = React.useState<boolean>(false);

  return (
    <nav className="text-nav-text shadow-lg custom-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-5 cursor-pointer" onClick={()=>window.location.reload()}>
            <img src="/logo.webp" alt="Logo" className="h-14 w-auto" />
            <h2 className='text-4xl text-[900] font-jersey'>
              Anime Quiz
            </h2>
          </div>
          
          <RightNav setLadderOpen={setLadderOpen} ladderOpen={ladderOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
