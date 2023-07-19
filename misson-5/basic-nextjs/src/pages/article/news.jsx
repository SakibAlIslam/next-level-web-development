import { Button } from "antd";
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>New Page</h1>
      <Button>
        <Link href="/">Go Back to Home Page</Link>
      </Button>
    </div>
  );
};

export default NewsPage;
