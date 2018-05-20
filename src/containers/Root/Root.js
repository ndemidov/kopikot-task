import React from 'react';
import { bool } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Home from '../Home';
import Account from '../Account';
import { HomeIcon, AccIcon } from '../../components/TabIcons';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#222a30",
  },
  title: {
    color: "#3abde2",
  },
});

class Root extends React.Component {
  static propTypes = {
    ready: bool.isRequired,
  }

  // Emulate disabled tab switching during token request.
  handleTabBarPress = ({ defaultHandler, scene }) => {
    if (this.props.ready) {
      defaultHandler(scene.index);
    }
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Tabs
            key="tabbar"
            swipeEnabled={false}
            tabBarPosition="bottom"
            showLabel={false}
            inactiveBackgroundColor="#222a30"
            activeBackgroundColor="#222a30"
            tabBarOnPress={this.handleTabBarPress}
          >
            <Scene
              key="home"
              component={Home}
              title="Главная"
              titleStyle={styles.title}
              navigationBarStyle={styles.navBar}
              icon={HomeIcon}
            />
            <Scene
              key="account"
              component={Account}
              title="Аккаунт"
              titleStyle={styles.title}
              navigationBarStyle={styles.navBar}
              icon={AccIcon}
            />
          </Tabs>
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ready: !!(state.token.info.token),
});

export default connect(mapStateToProps)(Root);
