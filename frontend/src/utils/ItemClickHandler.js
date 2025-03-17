import { useNavigate } from "react-router-dom";

const useItemClickHandler = () => {
  const navigate = useNavigate();

  const handleItemClick = (category, item) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-"); // Format URL
    navigate(`/category/${formattedItem}`);
  };

  return handleItemClick;
};

export default useItemClickHandler;
