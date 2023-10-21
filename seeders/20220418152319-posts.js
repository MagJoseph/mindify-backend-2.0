'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("posts", [
      {
        teacher_id: 1,
        title: "Yoga Pose Of The Day: Warrior I",
        tag: "yoga",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2440&q=80",
        content:
          "Benefits: Warrior I strengthens and stretches your legs and buttocks (glutes), the front of your hips (hip flexors), and shins. In your front leg, this pose strengthens the your thigh, calf, and ankle. In your back leg, it stretches the back of your thigh (hamstring) and calf muscles. It’s also a powerful pose for the upper body. Reaching up stretches your torso from your psoas along your chest up to your shoulders. It also stretches and strengthens the area around your shoulders and builds power in your back and arms.",
        likes: 4,
      },
      {
        teacher_id: 1,
        title: "10 Daily Affirmations. Choose the ones that fit you best",
        tag: "positive mindset",
        image:
          "https://shrm-res.cloudinary.com/image/upload/c_crop,h_704,w_1254,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/Tools%20and%20Samples/tk_wellness_sdydf0.jpg",
        content:
          "1. Each day is a new opportunity. Yesterday is over and done. 2. I know that old, negative patterns no longer limit me. I let them go with ease. 3. I accept and experience all my feelings. 4. It is healthier to express myself clearly and directly. 5. It is safe for me to be vulnerable. 6. I can reward myself for trying new things. 7. My dreams can come true. 8. I choose life. I choose happiness. 9. I have the freedom and power to create the life I desire. 10. I forgive myself completely.",
        likes: 10,
      },
      {
        teacher_id: 2,
        title: "6-Minute At-Home Glutes Workout",
        tag: "workout",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
        content:
          "Glute bridge series: To do a glute bridge, lay on your back with your knees bent and your feet a hip-width distance apart and flat on the floor. Relaxing your neck and upper body, press your feet firmly into the floor, and lift your hips up, activating your glutes and core first and hamstrings second. Then, slowly lower your hips back down. (Note: Make sure to activate your core to protect your lower back.) 10 glute bridges10 pulses holding the glute bridge at the top15-second break. Repeat 2 more times for a total of 3 rounds",
        likes: 61,
      },
      {
        teacher_id: 3,
        title: "Reishi Mushroom Benefits",
        tag: "diet",
        image:
          "https://cdn.shopify.com/s/files/1/0058/0252/4783/articles/Reishi_mushroom_benefits_4_1200x.jpg?v=1609701576",
        content:
          "One of the most important effects of the reishi mushroom is that it can boost your immune system. While some details are still uncertain, test-tube studies have shown that reishi can affect the genes in white blood cells, which are critical parts of your immune system.Research in cancer patients has shown that some of the molecules found in the mushroom can increase the activity of a type of white blood cell called natural killer cells.Many people consume this fungus due to its potential cancer-fighting properties. Also One 12-week study of 26 people showed that reishi mushroom may increase “good” HDL cholesterol and decrease triglycerides",
        likes: 17,
      },
      {
        teacher_id: 3,
        title: "Is Moringa a Super Food?",
        tag: "diet",
        image:
          "https://images.unsplash.com/photo-1566373049939-704ea187ef98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
        content:
          "If there were a top 10 list of plants that are going to help feed the world over the next hundred years, I would say moringa should be on that list,” said Carrie Waterman, a University of California, Davis, natural products chemist.Every part of the plant is edible — leaves, pods, seeds, flowers, even its root. The feathery leaves alone pack a powerful protein punch — nearly 30 percent by dry weight. Legumes don’t even have that much protein, nor all the essential amino acids. The leaves are high in vitamins A and C, calcium, zinc, iron, magnesium and potassium. They contain phytochemicals and antioxidants that have been shown in some research studies to reduce chronic inflammation. The plant even has the potential to simultaneously treat both malnutrition and obesity. My first impression was that it’s too good to be true,” said Waterman, who has researched the benefits of moringa for nearly a decade.",
        likes: 10,
      },
      {
        teacher_id: 1,
        title: "Can meditation help with Flu symptoms?",
        tag: "diet",
        image:
          "https://images.unsplash.com/photo-1611800065908-233b597db552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
        content:
          "Researchers reviewed more than 200 studies of mindfulness among healthy people and found mindfulness-based therapy was especially effective for reducing stress, anxiety and depression. Mindfulness can also help treat people with specific problems including depression, pain, smoking and addiction. Some of the most promising research has looked at people with depression. Several studies have found, for example, that MBCT can significantly reduce relapse in people who have had previous episodes of major depression. What's more, mindfulness-based interventions can improve physical health, too. For example, mindfulness may reduce pain, fatigue and stress in people with chronic pain. Other studies have found preliminary evidence that mindfulness might boost the immune system and help people recover more quickly from cold or flu.",
        likes: 10,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {})
  }
};
