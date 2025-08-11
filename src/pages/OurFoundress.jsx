import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link} from 'react-router-dom';

const OurFoundress = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Banner Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#541212] opacity-80 z-10"></div>

        <div className="relative z-0 flex justify-center items-center h-64 md:h-96 bg-[#541212]">
          {/* <img 
            src="https://mountcarmelcollege.ac.in/content/uploads/2024/04/Teresa-of-St.-Rose-of-Lima.jpg"
            alt="Mother Teresa of St. Rose of Lima"
            className="h-full w-auto object-contain"
          /> */}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <FaHeart className="text-3xl md:text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">Our Foundress</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl">
            Honoring the Legacy of Mother Teresa of St. Rose of Lima — Visionary, Educator, Servant of the Poor
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-[#ebd8b4]">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Round Image */}
            <div className="flex justify-center mb-8">
              <img 
                src="https://mccsblr.edu.in/wp-content/uploads/2025/06/Foundress-Img-350x350.png" 
                alt="Mother Teresa of St. Rose of Lima" 
                className="rounded-full w-64 h-64 object-cover border-4 border-[#541212]"
              />
            </div>

            <div className="flex justify-center mb-12">
                <Link to="/history">
                <button className="bg-[#541212] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3a0d0d] transition">
                Brief History
              </button>
                </Link>
               
              
            </div>

            {/* Biography Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#541212] mb-6 text-center">
                A Life of Service and Dedication
              </h2>
              <div className="space-y-4 text-black text-xl leading-relaxed">
                <p>
                  Mother Teresa was born on January 29th, 1858 in Chennai, to devout Catholic parents. Christened Mary Grace, she lost her mother at a young age, but her caring and affectionate father provided her with an excellent education that prepared her for her future mission. When she was 28 years old, she was invited to teach in a school in Alleppey (Kerala) managed by the Carmelite priests. The school was not functioning satisfactorily when she took over the reins, but she quickly turned it into a success story. A little later, Mary Grace who took her oath to be a Carmelite Sister, was professed in 1884 and subsequently named <strong>Sr. Teresa of St. Rose of Lima</strong>.
                </p>
                <p>
                  Sr. Teresa eventually began teaching in St. Joseph's Convent at Alleppey and lived a fearful religious life. In 1887, she was entrusted with the responsibility of educating and caring for the needy and the oppressed in Ernakulam. It was for this noble mission that she founded the Congregation of Carmelite Sisters of St. Teresa on April 24th, 1887 in Ernakulam. As the foundress of the Congregation of Carmelite Sisters, she responded in a prophetic manner to the demands of the Gospel and the Church and led the marginalized in society to live with dignity and secure their rightful place in society by fostering a 'civilization of love'.
                </p>
                <p>
                  Soon she became a 'Mother' to the poor, the orphan and outcast of the society. Sr. Teresa and her congregation became the pride of the neighbourhood with its selfless service to the sick and the dying, caring for the destitute, and a soup kitchen for the famine-hit public. In just fifteen years, Mother Teresa placed the congregation among the most noteworthy in social service, braving all the implicit challenges.
                </p>
                <p>
                  Mother Teresa's remarkable life came to a tragic end on September 12th, 1902, when the train she was travelling in fell into a river in Andhra Pradesh, following a sudden and violent storm. The congregation, left orphaned by her sudden demise, gathered its strength and continued its life of prayer and apostolic work along with public service, gradually growing into a widely spread chain of institutions.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#541212] mb-6 text-center">
                Values and Treasures of Mother Foundress
              </h2>
              <div className="space-y-4 text-black text-xl leading-relaxed">
                <p>
                  Mother Teresa’s death was a fruitful one, a death that was the beginning of a new life. A small seed that was sown in Ernakulam, Kerala has grown today into a large tree. Our CSST institute (Carmelite Sisters of St. Teresa) has accomplished what she had set forth to start. Today its presence is felt in India and outside.
                </p>
                <p>
                  Today, the congregation works in more than 120 institutions worldwide in schools & colleges, technical institutes, social work and social action centers, hospitals & hospices, homes for the aged, sick and destitute, orphanages and programs for the development & rehabilitation of women & children.
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFoundress;
