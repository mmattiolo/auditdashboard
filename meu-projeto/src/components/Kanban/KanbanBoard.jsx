// import { useState, useEffect } from 'react';
// import DragDrop from './DragDrop'; // Ajuste conforme necessário
// import KanbanNavbar from './KanbanNavbar'; // Ajuste conforme necessário

// const KanbanBoard = () => {
//   const [originalColumns, setOriginalColumns] = useState({}); // Estado original, não filtrado
//   const [columns, setColumns] = useState({});
//   const [filter, setFilter] = useState('all');
//   const [sort, setSort] = useState('dueDate');
//   const currentUser = 'Alex'; // Substitua pelo método de identificação do usuário atual

//   useEffect(() => {
//     fetchColumnsData(); // Função hipotética para buscar dados das colunas
//   }, []);

//   useEffect(() => {
//     applyFilterAndSort();
//   }, [filter, sort, originalColumns, applyFilterAndSort]);

//   const fetchColumnsData = async () => {
//     // Substitua isso pelo seu método de obtenção de dados
//     const fetchedColumns = {}; // Obtenha os dados da coluna aqui
//     setOriginalColumns(fetchedColumns);
//     setColumns(fetchedColumns);
//   };

//   const applyFilterAndSort = () => {
//     let filtered = { ...originalColumns };

//     // Filtragem
//     if (filter === 'active') {
//       for (let col in filtered) {
//         filtered[col].items = filtered[col].items.filter(item => item.status === 'active');
//       }
//     } else if (filter === 'myActive') {
//       for (let col in filtered) {
//         filtered[col].items = filtered[col].items.filter(item => item.status === 'active' && item.assignedTo === currentUser);
//       }
//     }
//     // Nenhuma ação necessária para 'all'

//     // Ordenação
//     const sortFunction = {
//       'dueDate': (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
//       'importance': (a, b) => b.priority - a.priority, // Assumindo que valores mais altos são mais importantes
//       'name': (a, b) => a.content.localeCompare(b.content),
//     }[sort];

//     for (let col in filtered) {
//       filtered[col].items.sort(sortFunction);
//     }

//     setColumns(filtered);
//   };

//   return (
//     <div>
//       <KanbanNavbar setFilter={setFilter} setSort={setSort} />
//       <DragDrop columns={columns} />
//     </div>
//   );
// };

// export default KanbanBoard;
