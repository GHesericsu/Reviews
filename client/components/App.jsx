/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BodyStyle from './GlobalStyle.jsx';

import MoreReviews from './MoreReviews.jsx';
import OverallStars from './OverallStars.jsx';
import StarsList from './StarsList.jsx';
import ReviewList from './ReviewList.jsx';
import Modal from './Modal.jsx';
import { sampleData } from '../../server/sampleData.js';

const Wrapper = styled.div`
  padding: 48px 0px;
  max-width: 1120px;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: sampleData,
      showModal: false,
      loaded: false,
    };
    this.getRoomReviews = this.getRoomReviews.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 99) + 1;
    // uncommet code below to get id from url
    // const id = window.location.pathname.split('/')[2];
    // console.log(id)
    this.getRoomReviews(id);
  }

  async getRoomReviews(id) {
    try {
      const response = await axios.get(`/reviews/${id}`);
      this.setState(() => ({
        reviewsData: response.data,
        loaded: true,
      }));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  handleShowModal() {
    this.setState(() => ({
      showModal: true,
    }));
  }

  handleHideModal() {
    this.setState(() => ({
      showModal: false,
    }));
  }

  render() {
    const { reviewsData, showModal, loaded } = this.state;
    return (
      <div>
        <BodyStyle modalOpened={showModal} />
        <Wrapper>
          {loaded ? <Modal handleHideModal={this.handleHideModal} showModal={showModal} data={reviewsData} /> : null}
          {loaded ? <OverallStars stars={reviewsData.overall} number={reviewsData.reviews.length} /> : null}
          {loaded ? <StarsList stars={reviewsData.otherStars} /> : null}
          {loaded ? <ReviewList reviews={reviewsData.reviews} /> : null}
          {loaded ? <MoreReviews number={reviewsData.reviews.length} handleShowModal={this.handleShowModal} /> : null}
        </Wrapper>
      </div>
    );
  }
}

export default App;
