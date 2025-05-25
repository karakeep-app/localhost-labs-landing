import Button from './ui/Button';
import Container from './ui/Container';

const projectItems = [
  {
    icon: <img className="h-8 w-8 text-blue-600" src="https://karakeep.app/favicon.ico" alt="Karakeep" />,
    title: 'Karakeep',
    description: 'Quickly save links, notes, and images and karakeep will automatically tag them for you using AI for faster retrieval.',
    link: 'https://karakeep.app',
    delay: 0.1
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Open Source Projects
            </h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((project, index) => (
              <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {project.description}
                    </p>
                    <Button href={project.link} external secondary>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
