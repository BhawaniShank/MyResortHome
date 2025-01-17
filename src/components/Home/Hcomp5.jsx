import bg from '../../assets/photo/food/dining.jpg';

const Hcomp5 = () => {
  return (
    <div className="relative h-[40em]">
      <div 
        style={{ backgroundImage: `url(${bg})` }} 
        className="absolute inset-0 bg-cover bg-fixed bg-center w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-sm tracking-widest mb-2">RESTAURANT & BAR</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Food and Dining</h1>
        <p className="text-base md:text-lg mb-2">Indulge in Sumptuous Delicacies of Rajasthan and Culinary Traditions from Across the Globe!</p>
        <p className="text-sm md:text-base">At Rajasthali, we believe that food is the definition to the cultural exploration. So for us, each dining moment is nothing less than an experience.</p>
      </div>
    </div>
  );
};

export default Hcomp5;
