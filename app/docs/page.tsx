import DocsLayout from "@/components/docs/DocsLayout";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsContent from "@/components/docs/DocsContent";

export default function DocsPage() {
  return (
    <DocsLayout>
      <DocsSidebar />
      <DocsContent />
    </DocsLayout>
  );
}
