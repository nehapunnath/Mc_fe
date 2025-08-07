import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import mc5 from '../assets/mc5.JPG';
import mc1 from '../assets/mc1.JPG';
import mc8 from '../assets/mc8.JPG';

function About() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.children;
    const totalSlides = slides.length;
    let currentIndex = 0;
    let isTransitioning = false;
    let intervalId;

    const startCarousel = () => {
      intervalId = setInterval(() => {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex = (currentIndex + 1) % totalSlides;
        carousel.style.transition = 'transform 1s ease-in-out';
        carousel.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
      }, 3000);
    };

    const handleTransitionEnd = () => {
      isTransitioning = false;
      if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
          carousel.style.transition = 'none';
          currentIndex = 0;
          carousel.style.transform = 'translateX(0)';
          void carousel.offsetWidth;
        }, 0);
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);
    startCarousel();

    return () => {
      clearInterval(intervalId);
      carousel.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div className="h-1/2 bg-[#541212] absolute top-0 left-0 w-full z-0"></div>
        <div className="h-1/2 bg-[#ebd8b4] absolute bottom-0 left-0 w-full z-0"></div>

        <div className="relative z-10">
          <section className="pt-16 pb-8 mt-20">
            <div className="max-w-6xl mx-auto px-6 text-center ">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mount Carmel Central School
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#c6795a] mb-6">
                Igniting Young Minds for a Brighter Future
              </h3>
              <p className="text-lg text-white max-w-3xl mx-auto">
                At Mount Carmel Central School, we nurture curiosity, values, and confidence to help students grow into compassionate, capable future leaders.
              </p>
            </div>
          </section>

          <div className="w-70 mx-4 md:mx-8 lg:mx-16 my-12  relative">
            <div className="overflow-hidden rounded-lg w-full mt-40">
              <div
                ref={carouselRef}
                className="flex"
                style={{ width: `${100 * 3}%` }}
              >
                <div className="relative flex-shrink-0" style={{ width: '33.3333%' }}>
                  <img
                    src={mc5}
                    alt="Students learning"
                    className="w-full h-96 md:h-[32rem] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-carousel-1.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white p-6 max-w-3xl">
                      <h4 className="text-xl md:text-2xl font-bold">Inspiring Excellence</h4>
                      <p className="text-base md:text-lg">Where curiosity meets opportunity</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex-shrink-0" style={{ width: '33.3333%' }}>
                  <img
                    src={mc1}
                    alt="School facilities"
                    className="w-full h-96 md:h-[32rem] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-carousel-2.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white p-6 max-w-3xl">
                      <h4 className="text-xl md:text-2xl font-bold">State-of-the-Art Facilities</h4>
                      <p className="text-base md:text-lg">Enabling innovative learning experiences</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex-shrink-0" style={{ width: '33.3333%' }}>
                  <img
                    src={mc8}
                    alt="School events"
                    className="w-full h-96 md:h-[32rem] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-carousel-3.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white p-6 max-w-3xl">
                      <h4 className="text-xl md:text-2xl font-bold">Vibrant Community</h4>
                      <p className="text-base md:text-lg">Building lifelong connections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="pb-16 bg-[#ebd8b4]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 text-left mt-26">
                <h3 className="text-sm font-semibold text-black-900 mb-2">
                  WHAT SETS US APART
                </h3>
                <h4 className="text-1xl font-bold md:text-3xl">
                  Shaping Futures, the <br /> Carmel Way
                </h4>
              </div>

            <div className="px-4 md:px-16 py-12">
  <div className="relative">
    <div className="flex overflow-x-auto pb-4 space-x-8 cursor-grab active:cursor-grabbing scrollbar-hide"
      onMouseDown={(e) => {
        const slider = e.currentTarget;
        let isDown = false;
        let startX = e.pageX - slider.offsetLeft;
        let scrollLeft = slider.scrollLeft;

        const mouseDown = () => isDown = true;
        const mouseLeave = () => isDown = false;
        const mouseUp = () => isDown = false;
        const mouseMove = (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2;
          slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousemove', mouseMove);
        slider.addEventListener('mouseup', mouseUp);
        slider.addEventListener('mouseleave', mouseLeave);
        
        return () => {
          slider.removeEventListener('mousemove', mouseMove);
          slider.removeEventListener('mouseup', mouseUp);
          slider.removeEventListener('mouseleave', mouseLeave);
        };
      }}
    >
      {/* Card 1 */}
      <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
        <img
          src="https://static.toiimg.com/thumb/107582720/107582720.jpg?height=746&width=420&resizemode=76&imgsize=86560"
          alt="Value-Based Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h4 className="text-2xl font-bold text-white mb-3">
              Value-Based Education
            </h4>
            <p className="text-gray-200 text-base">
              MCCS blends academic excellence with moral and spiritual values, shaping well-rounded individuals.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Card 2 */}
      <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
        <img
          src="https://thumbs.dreamstime.com/b/multiracial-hands-making-circle-13180691.jpg"
          alt="Experienced Faculty"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h4 className="text-2xl font-bold text-white mb-3">
              Experienced and Caring Faculty
            </h4>
            <p className="text-gray-200 text-base">
              Our dedicated teachers inspire learning through personal attention and commitment.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Card 3 */}
      <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
        <img
          src="https://photos.peopleimages.com/picture/201712/1628732-gathered-for-the-sake-of-growth-fit_400_400.jpg"
          alt="Holistic Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h4 className="text-2xl font-bold text-white mb-3">
              Holistic Development
            </h4>
            <p className="text-gray-200 text-base">
              From academics to arts and sports, students receive well-balanced education.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Card 4 */}
      {/* <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
        <img
          src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-14.jpg"
          alt="Modern Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h4 className="text-2xl font-bold text-white mb-3">
              Modern Infrastructure
            </h4>
            <p className="text-gray-200 text-base">
              State-of-the-art facilities that enhance the learning experience.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
      </div> */}

      {/* Card 5 */}
      <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Community Engagement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h4 className="text-2xl font-bold text-white mb-3">
               Innovative Learning Environment
            </h4>
            <p className="text-gray-200 text-base">
              Our modern classrooms foster creativity and collaboration among students.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  </div>
</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;