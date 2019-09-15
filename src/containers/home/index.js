import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { generate, setLength, changeProp } from '../../modules/password'
import { Slider, Row, Col, InputNumber, Checkbox } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const swal = require('sweetalert2');

const Home = props => (
  <div>
    <div style={{margin: 'auto', marginTop: 50, width: '70%', display: 'flex', flexDirection: 'column'}}>
      <CopyToClipboard text={props.password} onCopy={() => swal.fire({
        type: 'success',
        title: 'Copied!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      })}
      >
      <h2>{props.password}</h2>
      </CopyToClipboard>

      <label>Password length</label>

      <Row>
        <Col span={12}>
          <Slider
            min={5}
            max={32}
            onChange={props.setLength}
            value={typeof props.length === 'number' ? props.length : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={5}
            max={1024}
            style={{ marginLeft: 16 }}
            value={props.length}
            onChange={props.setLength}
          />
        </Col>
      </Row>
      <br/>
      <Row>
        <Checkbox onChange={(e) => props.changeProp('uppercase', e.target.checked)} checked={props.uppercase}>Include uppercase</Checkbox>
      </Row>
      <br/>
      <Row>
        <Checkbox onChange={(e) => props.changeProp('numbers', e.target.checked)} checked={props.numbers}>Include numbers</Checkbox>
      </Row>
      <br/>
      <Row>
        <Checkbox onChange={(e) => props.changeProp('symbols', e.target.checked)} checked={props.symbols}>Include symbols</Checkbox>
      </Row>
      <br/>
      <Row>
        <Checkbox onChange={(e) => props.changeProp('similar', e.target.checked)} checked={props.similar}>Include similar ( e.g. i, l, 1, L, o, 0, O )</Checkbox>
      </Row>
      <br/>
      <Row>
        <button className="btn btn-primary" type="button" onClick={props.generate}>Generate password</button>
      </Row>
    </div>

  </div>
)

const mapStateToProps = ({ password }) => ({
  ...password
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generate,
      setLength,
      changeProp
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
