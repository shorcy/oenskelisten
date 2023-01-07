import HeroSection from '~/components/HeroSection';

function index() {
  return (
    <>
      <HeroSection
        newsMessage="I gang med version 0.1.0"
        title="Din fortrukkende ønskeliste online"
        subTitle="Vær blandt en af de første til at få besked når ønskelisten går live. Med den spritnye ønskeliste til lige præcis dit behov."
      />
      <p className='bg-'></p>
    </>
  );
}

export default index;
