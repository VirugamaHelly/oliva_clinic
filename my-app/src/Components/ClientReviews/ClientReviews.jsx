import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './ClientReviews.css'; // Your CSS

const reviews = [
  {
    name: "Naidu Rakesh",
    initial: "P",
    text: "Reffred by my friend and went there for acne and acne scars it's good clinic I got treated for acne now getting for my scars. Found value for money. Good Improvement Clinic is good Staff is polite Thanks oliva",
  },
  {
    name: "Ravi Kumar",
    initial: "R",
    text: "I had pigmentation on my face have met the dermatologist here and she guided me skin lighting treatment. I have been taking the sessions good result, happy with results. Should appreciate the staff and doctors.value for money. Deserve 5star.",
  },
  {
    name: "Prathima A",
    initial: "P",
    text: "Nice treatment for scars, got improvement, highly recommended for any skin treatments.",
  },
  {
    name: "Shiva Krishna",
    initial: "P",
    text: "i have reached oliva with Acne and Scar problem.. but with in few weeks i can clearly see improvements with my skin. It provides very good hospitality and well experinced doctors and therapists.",
  },
  {
    name: "Harshitha Mauva",
    initial: "H",
    text: "I have been taking laser hair reduction treatment at Oliva since few months and got superb results I have been treated with my hormones and proper analysis of my hair type. Staff is helpful on appointments and ambience is good. Doctors are very good.",
  },
  {
    name: "Maringanti Manasa",
    initial: "M",
    text: "The service and treatment provided by them are worth the money. I have undergone skin lightening treatment and it have gave a awesome results.I was treated by doctor Himabindu and i Thank her.",
  },
  {
    name: "Vasudha Chowhan",
    initial: "V",
    text: "I had LASER HAIR REDUCTION sessions recently... they provide excellent service.. they use latest technologies which are painless and the staff here are so friendly... especially Praveen she is fabulous!!!",
  },
];

export default function ClientReviews() {
  return (
    <div className="reviews">
      <h2 className="section-title">Client Reviews</h2>
      <p className="section-subtitle">
        Read below what our esteemed clients have to say about us and what makes us the premier provider of skin and hair care services.
      </p>

      <div className="swiper-container2">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <div className="review-text">
                  {review.text}
                </div>
                <div className="client-info">
                  <div className="client-initial">{review.initial}</div>
                  <div className="client-name">{review.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
