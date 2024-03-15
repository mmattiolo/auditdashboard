import { useState, useEffect } from "react";
import "./dragDrop.css"; // Certifique-se de ter um CSS que suporte responsividade


const DragDrop = () => {
  const [columns, setColumns] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('./api/tasks.json'); // Ajuste o URL conforme necessário
      const { tasks } = await response.json();
      const columnsFromTasks = tasks.reduce((acc, task) => {

        if (!acc[task.status]) {
          acc[task.status] = {
            name: task.status,
            items: [],
          };
        }
        // Adiciona a tarefa na coluna correta
        acc[task.status].items.push(task);
        return acc;
      }, {});

      setColumns(columnsFromTasks);
    };

    loadData().catch(console.error);
  }, []);

  const addNewItemToColumn = (columnId) => {
    const newItem = {
      id: Date.now(), // Gerando um ID único com base no timestamp atual para simplicidade
      content: "New Task",
      area: "General", // Defina uma área padrão ou implemente uma lógica para selecionar
      deadline: "No Deadline",
      responsible: "Unassigned",
    };

    const updatedColumn = {
      ...columns[columnId],
      items: [...columns[columnId].items, newItem],
    };

    setColumns({
      ...columns,
      [columnId]: updatedColumn,
    });
  };

  const handleDragStart = (e, itemId, columnId) => {
    const dragInfo = JSON.stringify({ itemId, columnId });
    e.dataTransfer.setData("application/reactflow", dragInfo);
    e.target.style.opacity = "0.4";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    const dragInfo = JSON.parse(
      e.dataTransfer.getData("application/reactflow")
    );
    if (!dragInfo) {
      return;
    }

    const draggedItem = columns[dragInfo.columnId].items.find(
      (item) => item.id === dragInfo.itemId
    );
    if (!draggedItem) {
      return;
    }

    // Remove from previous column and add to the new one
    const newStartColumnItems = columns[dragInfo.columnId].items.filter(
      (item) => item.id !== dragInfo.itemId
    );
    const newEndColumnItems = [...columns[columnId].items, draggedItem];

    setColumns({
      ...columns,
      [dragInfo.columnId]: {
        ...columns[dragInfo.columnId],
        items: newStartColumnItems,
      },
      [columnId]: { ...columns[columnId], items: newEndColumnItems },
    });
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div className="kanban">
      {columns && Object.entries(columns).map(([columnId, column], index) => (
        <div
          key={columnId}
          // Aplica uma classe baseada no id da coluna para estilização específica
          className={`kanban-column ${columnId.toLowerCase()}`}
        >
          <div className="kanban-column-header">{column.name}</div>
          <div
            className="kanban-column-body"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnId)}
          >
            {column.items.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id, columnId)}
                onDragEnd={handleDragEnd}
                className="kanban-item"
              >
                <div className="kanban-item-header">
                  <span
                    className={`kanban-item-badge ${item.area
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {item.area}
                  </span>
                </div>
                {item.content}
                <div className="kanban-item-footer">
                  <span className="kanban-item-deadline">{item.deadline}</span>
                  <span className="kanban-item-responsible">
                    {item.responsible}
                  </span>
                </div>
              </div>
            ))}
            <button aria-label="New task" onClick={() => addNewItemToColumn(columnId)} className="add-item-btn">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragDrop;
