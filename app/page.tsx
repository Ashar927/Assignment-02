import Image from "next/image";

export default function() {
  return (
      
        <div className="flex justify-between items-center">
      
          <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
            hey,<br/>
            My name is <span className="BlueColour"> Ashar</span> <br/>
            I am Next js Developer <br/>
          </div>
          <div className="image">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocL6MkX2SBxNCG_0WIQ7ycFVA0qZeZWRJUqQVRY3S7hzBNHNRaXD=s288-c-no" alt="Ashar"  />
        
          </div>
          </div>
       );
 
}
