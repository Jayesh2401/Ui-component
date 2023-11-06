import React, { useState } from 'react';

interface Item {
  id: number;
  content: string;
}

interface CommonDragAndDropListProps {
  items: Item[];
}

const CommonDragAndDropList: React.FC<CommonDragAndDropListProps> = ({ items }) => {
  const [dragging, setDragging] = useState<number | null>(null);

  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    setDragging(index);
    event.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLLIElement>, targetIndex: number) => {
    const sourceIndex = Number(event.dataTransfer.getData('index'));

    if (sourceIndex !== targetIndex) {
      const newItems = [...items];
      const [movedItem] = newItems.splice(sourceIndex, 1);
      newItems.splice(targetIndex, 0, movedItem);

      setDragging(null);
      // Call a callback function if needed to notify about the item reordering
    }
  };

  return (
    <ul className="p-4">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`bg-blue-500 text-white rounded p-3 my-2 cursor-pointer ${
            dragging === index ? 'opacity-50' : 'hover:bg-blue-600'
          }`}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default CommonDragAndDropList;
