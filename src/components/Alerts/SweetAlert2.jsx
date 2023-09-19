import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SweetAlert2 = () => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <strong>Reminder!</strong>,
    html: <i>Add Items to Cart First!</i>,
    icon: 'warning',
  });
};

export default SweetAlert2;
