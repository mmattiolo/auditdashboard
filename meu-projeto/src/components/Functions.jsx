import './sideBar.css';

export function getStatusClass(status) {
        switch (status) {
          case 'planning':
            return 'status-planning';
          case 'in-progress':
            return 'status-in-progress';
          case 'completed':
            return 'status-completed';
          case 'reviewed':
            return 'status-reviewed';
          default:
            return '';
        }
      }
      
