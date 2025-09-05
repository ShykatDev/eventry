import EditEvent from "@/components/pages/Events/EditEvent";
import { PageProps } from "@/types/propsTypes";

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <EditEvent id={id} />;
};

export default page;
