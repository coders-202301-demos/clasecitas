import AssistantTeacher from "./AssistantTeacher/AssistantTeacher.js";
import LeadTeacher from "./LeadTeacher/LeadTeacher.js";

const mario = new LeadTeacher("Mario", ["Git", "Node"], 500000, 1);
const bert = new AssistantTeacher("Bert", ["Sass"]);

mario.favouriteAssistantTeacher = bert;

console.log(mario);
