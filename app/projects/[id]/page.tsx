// Server component
import ProjectClient from "./ProjectClient";

// This tells Next.js which pages to generate at build time
export async function generateStaticParams() {
  const projects = [1, 2, 3]; // Your project IDs
  return projects.map((id) => ({
    id: id.toString(),
  }));
}

// Server component that passes params to client component
export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectClient params={params} />;
}
