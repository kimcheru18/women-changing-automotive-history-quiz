/*--- Step 1 - Defining global variables ---*/

//1. User selects 'Start'
//2. User chooses from multiple choice answer
//3. Next question appears
//  a. User answers all questions from 1-10
//4. User scored ?/10
//5. Answers displayed
//6. Try again


var questionsArray = [
    //Question 1
    {
        questionText: 'In 1903, Mary Anderson patents which automobile device?',
        questionChoices: ['The glove compartment', 'Rearview mirror', 'The windshield wiper', 'Brake pads'],
        questionCorrectChoice: 2,
        correctDetails: 'The windshield wiper, it had a spring-loaded arm that could be pulled across the window from a lever inside the vehicle.'
    },

    //Question 2
    {
        questionText: 'What silent film star \"invented the first mechanical turn signal and brake light?\"',
        questionChoices: ['Lillian Gish who started out working in her father\'s automotive shop', 'Florence Lawrence, \"after years of tinkering with automobiles\"', 'The first turn signal and brake light was invented by Colleen Moore', 'Eleanor Boardman, who had a knack for all things mechanical'],
        questionCorrectChoice: 1,
        correctDetails: 'Florence Lawrence. \"Through the push of a button, her invention raised and lowered a flag on the rear bumper to inform other drivers where the car was headed next.\" '
    },
    //Question 3
    {
        questionText: 'In 1915 in New York City, Wilma Russey, became the first woman...?',
        questionChoices: ['Bus driver', 'Military Red cross Driver', 'Pizza delivery driver', 'Taxi Driver'],
        questionCorrectChoice: 3,
        correctDetails: 'Taxi driver. Wilma \"was an expert mechanic and had significantly more experience with automobiles than most men!\"'
    },

    //Question 4
    {
        questionText: 'Who is the first woman to ever lead a major auto company?',
        questionChoices: ['In 2014, Mary Barra is the first woman to became a CEO General Motors', 'Michelle Christensen in 2013', 'Katharine Blodgett became CEO of Volkswagen in 2014', 'Nancy Haroldson followed in her father\'s footsteps to become CEO of Buick in 2005'],
        questionCorrectChoice: 0,
        correctDetails: 'Mary Barra, in 2014, took the job at GM amid their ignition switch scandal and pulled the company into a strong comeback.'
    },

    //Question 5
    {
        questionText: 'What was the name of the first woman to drive across the United States?',
        questionChoices: ['Ada Lovelace in 1908, who was 19 years old ', 'Helene Rother in 1918 at the age of 34 ', 'Alice Ramsey in 1909, when she was 22 ', 'Amelia Earhart in 1920, at the age of 23'],
        questionCorrectChoice: 2,
        correctDetails: 'In 1909, at the age of 22, Alice Ramsey traveled 6,000 miles across the United States and reached speeds of 42 miles per hour.'
    },

    //Question 6
    {
        questionText: 'The first female automotive designer who went to work for GM in the early 1940\'s and then on to Nash Motors in 1947 was...?',
        questionChoices: ['Helene Rother who was \"a refugee, a single mom and an automotive designer\"', 'Designing key features like door handles and speedometers, Temple Grandin', 'Madam C. J. Walker worked for 17 years for companies such as GM and Nash Motors', 'Patrice Banks was a pioneer in the field and worked for GM and Nash Motors'],
        questionCorrectChoice: 0,
        correctDetails: 'Helene Rother \"sketched interior concepts and designed key features like door handles, speedometers, and medallions\"'
    },

    //Question 7
    {
        questionText: 'In 1965, who was the first woman to \"become licensed by the National Hot Rod Association (NHRA) to drive a dragster\"?',
        questionChoices: ['Janet Guthrie, who was also the first female dragster to break the 6.00 second barrier', 'Sarah Christian, also the first woman to claim Winston World Championship', 'Margaret Frye found her interest in dragsters after she married Harold Frye in 1964', 'In her career, Shirley \“Cha Cha\” Muldowney hit speeds up to 320.20MPH'],
        questionCorrectChoice: 3,
        correctDetails: 'Shirley \"Cha Cha\" Muldowney, regardless of gender, was one of the most successful drag racers in history.'
    },

    //Question 8
    {
        questionText: 'Wireless Transmission Technology was invented in 1941 by what actress? ',
        questionChoices: ['Ava Gardner, who also found an interest in wireless technology that has led us to WiFi and GPS', 'Olivia de Havilland created this \"wireless transmission technology during World War II\" ', 'Hedy Lamarr, \"known for her starring roles in Samson and Delilah, Algiers and The StrangeWoman, to name a few\" ', 'Myrna Loy \"laid the foundation for the WiFi/GPS we have today\" '],
        questionCorrectChoice: 3,
        correctDetails: 'Hedy Lamarr, \"for this work, she was inducted into the National Inventors Hall of Fame in 2014.\"'
    },

    //Question 9
    {
        questionText: 'What automotive accessory did Margaret A. Wilcox of Chicago invent in 1893?',
        questionChoices: ['The car heater', 'The gear shift', 'A horn', 'The floor mat'],
        questionCorrectChoice: 0,
        correctDetails: '\"Before the electric car heater was created, Margaret Wilcox designed a way for the car engine to open and disperse hot air into the front cabin of the vehicle.\"'
    },

    //Question 10
    {
        questionText: 'In 1888, after a long family road trip and some difficulty with the brakes, what woman was inspired to design brake pads?',
        questionChoices: ['Bertha Benz, who was Karl Benz\'s wife and business partner ', 'After a terrible accident, Denise McCluggage went to work designing brake pads', 'Charlotte Bridgwood who was also the mother of Florence Lawrence', 'Brake pads were invented by Janice Briggs'],
        questionCorrectChoice: 0,
        correctDetails: '\"Karl Benz invented the automobile but his wife Bertha Benz undertook the long journey from Mannheim to Pforzheim to show the world what the automobiel could do.\"'
    }
];

/*--- Step 2 - Defining functions ---*/

/*--- Step 3 - Using functions ---*/

$(document).ready(function () {});
