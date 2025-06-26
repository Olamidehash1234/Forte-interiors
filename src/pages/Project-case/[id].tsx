// import { GetStaticPaths, GetStaticProps } from "next";
import ProjectCase from "../../components/ProjectCase";
import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";

const ProjectCasePage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;
  return <ProjectCase project={project} />;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: projects.map((p) => ({
//       params: { id: p.id },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id as string;
//   const project = projects.find((p) => p.id === id) || null;
//   return {
//     props: { project },
//   };
// };

// export default ProjectCasePage;
// };

export default ProjectCasePage;
