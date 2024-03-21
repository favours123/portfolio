import React from 'react';
import pic1 from './assets/pic.png'
const Projectcard = () => {
  return (
    <div>
   <div className='w-full'>
      <div className="w-[270px] h-[300px] shadow-xl rounded-xl bg-red-500 my-[30px] mx-auto ">
        <div >
          <img className=" w-[200px] h-[100px] rounded-[5px] my-3 mx-auto" src={pic1} alt="me" />
        </div>
        <div className="card-title text-2xl font-semibold text-[#525151] text-center ">Ceo OlesonNG</div>
        <div className="card-description  text-[#525151] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid quo autem, accusamus excepturi quod. Possimus et cum quam.</div>
      </div>
    </div>
    </div>
  );
}

export default Projectcard;
