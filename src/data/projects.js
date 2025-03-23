import BriansBlogThumbnail from '../assets/images/brians-blog-thumbnail.PNG';
import ImageResizer from '../assets/images/image-resizer-thumbnail.PNG'
import CloudBooksManager from '../assets/images/cloudbooks-manager-thumbnail.PNG';

const projects = [
  {
    id: 1,
    name: "Brian's Blog",
    description: "A dynamic blogging platform hosted on Render. Built with modern web technologies, it allows users to read and comment on blog posts.",
    demo: "https://brians-blog.onrender.com/",
    code: "https://github.com/bwils5/Brians-Blog",
    image: BriansBlogThumbnail, // Use the imported variable
  },
  {
    id: 2,
    name: "Serverless Image Resizer",
    description: "An AWS Lambda-powered image resizer built using CDK. It automatically resizes images uploaded to an S3 bucket.",
    demo: "https://us-east-2.console.aws.amazon.com/s3/buckets/imageresizerstack-imageuploadbucket49d95137-b0odnkvtcmbh?bucketType=general&region=us-east-2&tab=objects#",
    code: "https://github.com/bwils5/serverless-image-resizer",
    image: ImageResizer
  },
  {
    id: 3,
    name: "CloudBooks Manager",
    description: "A cloud-based book management system hosted on Render. Built with modern web technologies, it helps users organize and track their book collections.",
    demo: "https://cloudbooks-manager.onrender.com/",
    code: "https://github.com/bwils5/cloudbooks-manager",
    image: CloudBooksManager
  }
];

export default projects;
