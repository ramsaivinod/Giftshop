import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SweetAlert = () => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <strong>Hurray!</strong>,
    html: <i>Discount Applied!</i>,
    icon: 'success',
  });
};

export default SweetAlert;
