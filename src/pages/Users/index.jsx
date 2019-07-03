import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { increase, decrease} from '../../actions';

const Users = props => {
  /* eslint-disable-next-line */
  const { count, decrease, increase } = props;
  const doDecrease = () => decrease(2);
  const doIncrease = () => increase(1);

  return <>
  <div>
    <Button type="primary">用户列表</Button>
    <Button type="primary" style={{ marginLeft: '10px' }}>用户详情</Button>
    <div style={{ marginTop: '20px' }}>
      <Button
        type="primary"
        onClick={doIncrease}
      >
          Increase
      </Button>
      <Button
        type="primary"
        onClick={doDecrease}
        style={{ marginLeft: '10px' }}
      >
        Decrease
      </Button>
    </div>
    <div>
      {count}
    </div>
  </div>
</>;
};

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = {
  increase,
  decrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
