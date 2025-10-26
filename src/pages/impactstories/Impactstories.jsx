import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import TopSocialHeader from "../../components/TopSocialHeader";
import Footer from "../../components/Footer";
Modal.setAppElement("#root");

const researchData = [
  {
    id: 1,
    title: "CAN Info Tech",
    modal_title :"CAN InfoTech Experience",
    image: "/assets/img/story2.png",
    shortDescription:
      `During the CAN Info Tech Expo, Aaviyanta Foundation set up a free health and dental screening stall to promote well-being among IT professionals. Over 300 people participated daily, eager to learn about their health.
“It was inspiring to see their enthusiasm,” share Jaya and Prashant, young medical officers who led the program. “The experience taught us how important it is to bring healthcare to every corner of our community.”`,
    fullDescription: `
                  <p>
                CAN Info Tech is a yearly expo that exhibits different ICT
                    sections, including branding, fintech, accessories and
                    product launching, startups and innovation and e-governance.
                    This fair is organized annually with the objective of
                    providing information and showcasing latest technology in
                    the field of IT. <br /> <br />
                    Aaviyanta Foundation had also organized a free general
                    health/ dental screening stall at the expo with the aim of
                    analyzing health statistics of individuals in Information
                    Technology.
                    <br />
                </p>
                It was done for two days and was a huge success
                    of daily 300 – 350 participants registering in. Health
                    screening is one of the most basic tools of modern public
                    health and preventive medicine. The purpose of screening is
                    to identify people in an apparently healthy population who
                    are at higher risk of a health problem or a condition, so
                    that an early treatment or intervention can be offered.
                    This, in turn, may lead to better health outcomes for some
                    of the screened individuals. Screening invites people who do
                    not have symptoms to undergo testing, whereas early
                    diagnosis is intended to detect conditions as early as
                    possible among people with symptoms.
                    <br /> <br />
                    We did not find any significant issues, however could
                    understand that the individuals in IT usually have muscle
                    pain and stress. It was interesting to see their enthusiasm
                    in wanting to be aware of their health. One of the most
                    fulfilling experience for us because as young Medical
                    Officers, although we get to follow up with patients,
                    interaction with highly skilled professionals is rare. We
                    got to learn from those interactions as we understood that
                    dealing with them is different and had to be catered to
                    specific questions.
                    <br /> <br />
                    We Thank Aaviyanta Foundation for this experience and we
                    would like to be involved more in such community
                    intervention programs in the future too.
                    <br />
                    <br />
                    <strong>Jaya and Prashant </strong>
                    <br />
                  `,
  },
  {
    id: 2,
    title: "Volunteer Pharmacist",
    modal_title: "Asmita Sharma's Contribution to Social Service",
    image: "/assets/img/story3.png",
    shortDescription:
     `Meet Asmita Sharma, a Quality Control Pharmacist who joined our free health program at Manav Sewa Ashram. Surrounded by vulnerable and homeless individuals, she found a sense of peace and fulfillment in serving those who needed care the most.
“Seeing their smiles after the checkup was pure joy,” she says. “It reminded me that even small acts of service can bring immense happiness.”`,
    fullDescription: `
  <p>
                Being a part of a free health program conducted by the
                    Aaviyanta Foundation in Manav Sewa Ashram, my degree of
                    satisfaction and inner peace was on next level by helping
                    underprivileged people. Although I had been to various
                    health programs earlier, this health program turned out to
                    be completely different for me because it was for vulnerable
                    and homeless people. <br />{" "} <br />
                    There were some people who didn’t even know their names and
                    Ashram had put their names as Munna Bhai, Kallu Sheth, etc.
                    and surnames as Manav (Human being) in common.
                </p>
                Each person
                    had their specific problems in the Ashram which some of them
                    knew by themselves and some were addressed by the caretaker
                    of Ashram for those who couldn’t speak. After their health
                    check up by doctors, they seemed happy and satisfied which
                    gave me and our team inner peace by seeing those happy
                    faces. I would like to sum up my experience as challenging
                    and completely satisfying.
                    <br /> <br />
                    Aaviyanta Foundation had conducted a program with proper
                    planning and executed in a way that there was no shortage of
                    medicines, doctors and volunteers making the health program
                    successful. I totally appreciate all efforts that the
                    organisation is committed to reach out to and work directly
                    with underprivileged and underrepresented communities. My
                    good wishes to Aaviyanta to make a significant contribution
                    to society and I wish to be a part of the team always.
                    <br /> <br />
                    <strong> Asmita Sharma</strong>

                    <br />
                    Quality control Pharmacist`,
  },
  {
    id: 3,
    title: "ICT Skill",
    modal_title: "My Journey in ICT Training",
    image: "/assets/img/story1.png",
    shortDescription:
      "Meet Jayanti Ranjit, a 54-year-old homemaker who joined our ICT training with the hope of simply learning how to open a laptop. Encouraged by her grandchildren, she took a step into the digital world — and ended up finding confidence, new friends, and a lifelong love for learning. 'It was just five days' she says, 'but an experience of a lifetime.'",
    fullDescription: `


                I am Jayanti Ranjit, one of the participants for the second
                    round of ICT training held at a community hall of my colony.
                    As it was a public event, many friends from the
                    neighbourhood had also joined. <br /> <br />I am 54 years
                    old and I use a tablet and phone because my grandchildren
                    encourage me to. I normally watch videos on youtube, because
                    that is something I know how to use. I am not a tech savvy
                    person, but I do like to use facebook to stay connected with
                    my family and friends who live outside of Nepal. <br />{" "}
                    <br />
                    I had absolutely no idea how the program, organised by
                    Aaviyanta, would run. I only had an expectation to learn
                    something new and that they would teach me how to open a
                    laptop, so that I could do it independently myself. I am
                    happy to say that I am satisfied with the program as it was
                    very well planned. As we are from different age groups, we
                    were separated according to that and different trainers were
                    provided for each one. <br /> <br />
                    Trainer is the soul of any training program and we were
                    blessed to have a very good one. Training period was for 3
                    hours per day for 5 days. We still miss going to the class
                    when the trainer would teach us very softly whenever we
                    forgot how to start the MS-Office package. I met a lot of
                    new people who are still my friends and we all are in a
                    whatsapp group now. <br /> <br />
                    Even if it was just for 5 days only, it was an experience of
                    a lifetime. I Thank Anjira Maam for being patient with us
                    and teaching us the basic level of ICT. We would like to
                    join again for further programs in ICT or other related
                    topics. <br /> <br />
                    <strong>Jayanti Rangit</strong>
                      <br /> Homemaker
                  `,
  },
  {
    id: 4,
    title: "TechLeadHers Fellows",
    modal_title: "Fellow Participant of TechLeadHers First Cohort",
    image: "/assets/img/jyoti.jpg",
    shortDescription:
      " Look at what our TechLeadHers fellow, Jyoti Joshi, has to say! Through the six-month TechLeadHers program by Aaviyanta Foundation, Jyoti discovered not just her technical strengths but also her confidence as a leader. From an intensive bootcamp to hands-on projects and mentorship, the journey helped her grow both personally and professionally. Jyoti describes it as a truly transformative experience that empowered her to embrace collaboration, leadership, and the power of community in tech",
    fullDescription: `
 <p>
                  Being part of TechLeadHers, conducted by the Aaviyanta
                  Foundation, has been a transformative experience that
                  empowered me to grow both personally and professionally. This
                  six-month program provided a perfect blend of technical
                  training, leadership development, and mentorship, all within a
                  supportive and inclusive environment. The journey began with
                  an intensive 10-day bootcamp covering essential topics such as
                  frontend and backend development, design thinking, project
                  management, and effective communication, laying the groundwork
                  for my growth in the tech field. <br />{" "}
                </p>
                One of the most impactful aspects of TechLeadHers was its
                    emphasis on collaboration and teamwork. Through group
                    projects, I learned the importance of clear communication,
                    project coordination, and leveraging each team member's
                    strengths to achieve shared goals. The program also fostered
                    a vibrant community where mentors and peers shared insights,
                    offered guidance, and celebrated successes together, making
                    it a truly enriching experience.
                    <br />
                    <br />
                    TechLeadHers has become the foundation of my tech journey,
                    equipping me with not only technical skills but also the
                    confidence and leadership qualities necessary to excel in
                    the tech industry. This program has connected me with a
                    network of inspiring individuals and solidified my belief in
                    the importance of mentorship and community support in
                    driving meaningful change. I am deeply grateful to the
                    Aaviyanta Foundation for their vision and commitment to
                    empowering communities and individuals, and I truly
                    appreciate the impactful opportunities they provide.
                    <br />
                    <br />
                    <strong>Jyoti Joshi</strong>
                    <br />
                    Aspiring Tech Leader
                  `,
  },
];

const modalStyles = {
  content: {
    maxWidth: "800px",
    maxHeight: "85vh",
    margin: "auto",
    overflowY: "auto",
    borderRadius: "1rem",
    padding: "2rem",
    background: "linear-gradient(135deg, #f9fafb, #e0f7fa)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 1000,
  },
};

const ImpactStories = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedResearch ? "hidden" : "auto";
  }, [selectedResearch]);

  return (
    <>
    <div className="min-h-screen pt-10 bg-gradient-to-b from-blue-50 to-teal-50 flex flex-col items-center">
      <TopSocialHeader/>
      <Navbar />
      <div className="flex-1 pt-[90px] pb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        Impact Stories
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 max-w-6xl">
          {researchData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedResearch(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-teal-700 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.shortDescription}
                </p>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

     {/* Modal */}
<Modal
  isOpen={!!selectedResearch}
  onRequestClose={() => setSelectedResearch(null)}
  style={modalStyles}
  contentLabel="Research Modal"
>
  {selectedResearch && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="font-sans text-gray-800"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
          {selectedResearch.modal_title}
        </h2>
        <button
          onClick={() => setSelectedResearch(null)}
          className="text-gray-500 hover:text-red-500 text-3xl font-bold transition"
        >
          ×
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative mb-8">
        <img
          src={selectedResearch.image}
          alt={selectedResearch.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="space-y-8 leading-relaxed text-justify">
        <div
          className="text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: selectedResearch.fullDescription }}
        ></div>

      </div>
    </motion.div>
  )}
</Modal>

    </div>
      <Footer/>
      </>
  );
};

export default ImpactStories;
