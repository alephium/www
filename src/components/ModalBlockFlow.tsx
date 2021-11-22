import { FC } from 'react'

import Modal, { ModalProps } from './Modal'
import ImageWithTextSideBySide from './ImageWithTextSideBySide'

import BlockFlowSharding from '../images/blockflow-sharding.png'
import BlockFlowSharding2 from '../images/blockflow-sharding-2.png'
import BlockFlowConsensus from '../images/blockflow-consensus.png'

const ModalBlockFlow: FC<ModalProps> = ({ isOpen, setIsOpen }) => (
  <Modal title="BlockFlow" isOpen={isOpen} setIsOpen={setIsOpen}>
    <div>
      <h3>Sharding</h3>
      <ImageWithTextSideBySide image={BlockFlowSharding} imageAlt="BlockFlow sharding">
        <ol>
          <li>
            Addresses are randomly divided into <code>G</code> groups
          </li>
          <li>
            Transactions are divided into <code>G x G</code> shards based on the input and output addresses
          </li>
          <li>
            <code>G x G</code> chains in total
          </li>
        </ol>
      </ImageWithTextSideBySide>
      <ImageWithTextSideBySide image={BlockFlowSharding2} imageAlt="BlockFlow sharding" imageOnRight>
        <ul>
          <li>
            Transactions from address group <code>B</code> to address group <code>A</code> are committed to shard{' '}
            <code>(B, A)</code>
          </li>
          <li>
            For address group <code>B</code>, one only needs to download the transaction data of <code>2G - 1</code>{' '}
            shards related to itself: namely <code>(X,B)</code> and <code>(B,Y)</code>, where <code>X, Y ∈ G</code>
          </li>
          <li>
            The amount of data that a single node needs to save is reduced from <code>G²</code> to <code>2G-1</code>
          </li>
        </ul>
      </ImageWithTextSideBySide>
      <h3>Consensus</h3>
      <ImageWithTextSideBySide image={BlockFlowConsensus} imageAlt="BlockFlow consensus">
        <h4>Fork Choice Rule: Dependency Data Structure</h4>
        <ul>
          <li>Each block selects several block hashes as dependencies</li>
          <li>Transitively, each new block determines a unique fork for each shard</li>
        </ul>
        <h4>Finality Algorithm</h4>
        <ul>
          <li>Miners find best dependencies and pack valid transactions</li>
          <li>Nodes validate dependencies and transactions</li>
          <li>BlockFlow is agnostic to finality algorithm, Alephium is currently using PoLW</li>
        </ul>
      </ImageWithTextSideBySide>
    </div>
  </Modal>
)

export default ModalBlockFlow
