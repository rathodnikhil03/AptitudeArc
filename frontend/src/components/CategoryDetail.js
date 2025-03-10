import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryId } = useParams();

  // Fetch category details based on categoryId
  // For demonstration, using a static object
  const categoryDetails = {
    'general-aptitude': {
      title: 'General Aptitude',
      description: 'Detailed information about General Aptitude.',
    },
    'verbal-reasoning': {
      title: 'Verbal and Reasoning',
      description: 'Detailed information about Verbal and Reasoning.',
    },
    // Add other categories as needed
  };

  const category = categoryDetails[categoryId];

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div>
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CategoryDetail;
