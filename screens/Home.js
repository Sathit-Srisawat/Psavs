import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Dimensions,
  Image
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  graphStyle
} from "react-native-chart-kit";

export default class setting extends React.Component {

  state = {
    data: [],
    data1: [],
    tableHead: ['คะแนน', 'เวลาที่ใช้', 'วัน / เดือน / ปี'],
    tableData: [
      ['97', '6.5', '09/01/64'],
      ['68', '8.7', '10/01/64'],
      ['96', '6,7', '14/01/64'],
      ['56', '5.2', '17/01/64']
    ]

  }


  fetchData = async () => {
    const response = await fetch('http://localhost:3002/patient'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
    const responses = await fetch('http://localhost:3003/game'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTables = await responses.json();
    this.setState({ data1: testTables });

  }

  componentDidMount = () => {
    this.fetchData();
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#75cfb8' }}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TextInput
            style={{ backgroundColor: '#fff', height: 50, borderColor: 'gray', borderRadius: 15, marginTop: 10, width: 350 }}
            placeholder='     search'
            onChangeText={(time) => this.setState({ time })}
          />
        </View>

        <View style={styles.cards}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <View style={styles.cardin}>
                <ScrollView horizontal={false}>
                  {item.no == 1 ?
                    <View>
                      <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                        <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                        <View>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                        </View>
                      </View>
                      <View>
                        <View style={{ marginTop: 20 }}></View>
                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                      </View>
                      <ScrollView horizontal={true}>

                        <View style={styles.cardin1}>
                          <View style={styles.container} >
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                              <Text style={{ fontSize: 18 }}>
                                ตารางคะแนนจากการเล่นเกมส์
                          </Text>
                            </View>
                            <View style={{ margin: 10 }}>
                              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                <Rows data={this.state.tableData} textStyle={styles.text} />
                              </Table>
                            </View>
                          </View>
                        </View>

                        <View style={styles.cardin1}>
                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                              <View style={styles.card1}>
                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                  ข้อมูลการเล่นเกมส์วันนี้
                              </Text>
                                <ProgressChart
                                  style={{ borderRadius: 15, marginTop: 30 }}
                                  data={data}
                                  width={325}
                                  height={160}
                                  strokeWidth={16}
                                  radius={32}
                                  chartConfig={chartConfig}
                                  hideLegend={false}
                                />

                              </View>
                            </View>
                          </View>
                        </View>

                        <View style={styles.cardin1}>
                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                              <View style={styles.card1}>
                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                  ข้อมูลการเล่นเกมส์ของเดือนนี้
                                </Text>
                                <BarChart
                                  style={graphStyle}
                                  data={databar}
                                  width={325}
                                  height={240}
                                  yAxisLabel=""
                                  chartConfig={chartConfig}
                                  verticalLabelRotation={30}
                                />

                              </View>
                            </View>
                          </View>
                        </View>

                      </ScrollView>
                    </View>
                    : null}

                  {item.no == 2 ?
                    <View>
                      <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                        <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                        <View>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                        </View>
                      </View>
                      <View>
                        <View style={{ marginTop: 20 }}></View>
                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                      </View>
                      <ScrollView horizontal={true}>

                        <View style={styles.cardin1}>
                          <View style={styles.container} >
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                              <Text style={{ fontSize: 18 }}>
                                ตารางคะแนนจากการเล่นเกมส์
                          </Text>
                            </View>
                            <View style={{ margin: 10 }}>
                              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                <Rows data={this.state.tableData} textStyle={styles.text} />
                              </Table>
                            </View>
                          </View>
                        </View>

                        <View style={styles.cardin1}>
                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                              <View style={styles.card1}>
                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                  ข้อมูลการเล่นเกมส์วันนี้
                              </Text>
                                <ProgressChart
                                  style={{ borderRadius: 15, marginTop: 30 }}
                                  data={data}
                                  width={325}
                                  height={160}
                                  strokeWidth={16}
                                  radius={32}
                                  chartConfig={chartConfig}
                                  hideLegend={false}
                                />

                              </View>
                            </View>
                          </View>
                        </View>

                        <View style={styles.cardin1}>
                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                              <View style={styles.card1}>
                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                  ข้อมูลการเล่นเกมส์ของเดือนนี้
                                </Text>
                                <BarChart
                                  style={graphStyle}
                                  data={databar}
                                  width={325}
                                  height={240}
                                  yAxisLabel=""
                                  chartConfig={chartConfig}
                                  verticalLabelRotation={30}
                                />

                              </View>
                            </View>
                          </View>
                        </View>

                      </ScrollView>
                    </View>
                    : null}{item.no == 3 ?
                      <View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                          <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                          <View>
                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                          </View>
                        </View>
                        <View>
                          <View style={{ marginTop: 20 }}></View>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                        </View>
                        <ScrollView horizontal={true}>

                          <View style={styles.cardin1}>
                            <View style={styles.container} >
                              <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 18 }}>
                                  ตารางคะแนนจากการเล่นเกมส์
                            </Text>
                              </View>
                              <View style={{ margin: 10 }}>
                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                  <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                  <Rows data={this.state.tableData} textStyle={styles.text} />
                                </Table>
                              </View>
                            </View>
                          </View>

                          <View style={styles.cardin1}>
                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                              <View style={{ alignItems: 'center' }}>
                                <View style={styles.card1}>
                                  <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                    ข้อมูลการเล่นเกมส์วันนี้
                                </Text>
                                  <ProgressChart
                                    style={{ borderRadius: 15, marginTop: 30 }}
                                    data={data}
                                    width={325}
                                    height={160}
                                    strokeWidth={16}
                                    radius={32}
                                    chartConfig={chartConfig}
                                    hideLegend={false}
                                  />

                                </View>
                              </View>
                            </View>
                          </View>

                          <View style={styles.cardin1}>
                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                              <View style={{ alignItems: 'center' }}>
                                <View style={styles.card1}>
                                  <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                    ข้อมูลการเล่นเกมส์ของเดือนนี้
                                  </Text>
                                  <BarChart
                                    style={graphStyle}
                                    data={databar}
                                    width={325}
                                    height={240}
                                    yAxisLabel=""
                                    chartConfig={chartConfig}
                                    verticalLabelRotation={30}
                                  />

                                </View>
                              </View>
                            </View>
                          </View>

                        </ScrollView>
                      </View>
                      : null}{item.no == 4 ?
                        <View>
                          <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                            <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                            <View>
                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                            </View>
                          </View>
                          <View>
                            <View style={{ marginTop: 20 }}></View>
                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                          </View>
                          <ScrollView horizontal={true}>

                            <View style={styles.cardin1}>
                              <View style={styles.container} >
                                <View style={{ alignItems: 'center', marginTop: 10 }}>
                                  <Text style={{ fontSize: 18 }}>
                                    ตารางคะแนนจากการเล่นเกมส์
                              </Text>
                                </View>
                                <View style={{ margin: 10 }}>
                                  <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                    <Rows data={this.state.tableData} textStyle={styles.text} />
                                  </Table>
                                </View>
                              </View>
                            </View>

                            <View style={styles.cardin1}>
                              <View style={{ marginTop: 10, marginLeft: 10 }}>
                                <View style={{ alignItems: 'center' }}>
                                  <View style={styles.card1}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                      ข้อมูลการเล่นเกมส์วันนี้
                                  </Text>
                                    <ProgressChart
                                      style={{ borderRadius: 15, marginTop: 30 }}
                                      data={data}
                                      width={325}
                                      height={160}
                                      strokeWidth={16}
                                      radius={32}
                                      chartConfig={chartConfig}
                                      hideLegend={false}
                                    />

                                  </View>
                                </View>
                              </View>
                            </View>

                            <View style={styles.cardin1}>
                              <View style={{ marginTop: 10, marginLeft: 10 }}>
                                <View style={{ alignItems: 'center' }}>
                                  <View style={styles.card1}>
                                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                      ข้อมูลการเล่นเกมส์ของเดือนนี้
                                    </Text>
                                    <BarChart
                                      style={graphStyle}
                                      data={databar}
                                      width={325}
                                      height={240}
                                      yAxisLabel=""
                                      chartConfig={chartConfig}
                                      verticalLabelRotation={30}
                                    />

                                  </View>
                                </View>
                              </View>
                            </View>

                          </ScrollView>
                        </View>
                        : null}{item.no == 5 ?
                          <View>
                            <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                              <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                              <View>
                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                              </View>
                            </View>
                            <View>
                              <View style={{ marginTop: 20 }}></View>
                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                            </View>
                            <ScrollView horizontal={true}>

                              <View style={styles.cardin1}>
                                <View style={styles.container} >
                                  <View style={{ alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ fontSize: 18 }}>
                                      ตารางคะแนนจากการเล่นเกมส์
                                </Text>
                                  </View>
                                  <View style={{ margin: 10 }}>
                                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                      <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                      <Rows data={this.state.tableData} textStyle={styles.text} />
                                    </Table>
                                  </View>
                                </View>
                              </View>

                              <View style={styles.cardin1}>
                                <View style={{ marginTop: 10, marginLeft: 10 }}>
                                  <View style={{ alignItems: 'center' }}>
                                    <View style={styles.card1}>
                                      <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                        ข้อมูลการเล่นเกมส์วันนี้
                                    </Text>
                                      <ProgressChart
                                        style={{ borderRadius: 15, marginTop: 30 }}
                                        data={data}
                                        width={325}
                                        height={160}
                                        strokeWidth={16}
                                        radius={32}
                                        chartConfig={chartConfig}
                                        hideLegend={false}
                                      />

                                    </View>
                                  </View>
                                </View>
                              </View>

                              <View style={styles.cardin1}>
                                <View style={{ marginTop: 10, marginLeft: 10 }}>
                                  <View style={{ alignItems: 'center' }}>
                                    <View style={styles.card1}>
                                      <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                        ข้อมูลการเล่นเกมส์ของเดือนนี้
                                      </Text>
                                      <BarChart
                                        style={graphStyle}
                                        data={databar}
                                        width={325}
                                        height={240}
                                        yAxisLabel=""
                                        chartConfig={chartConfig}
                                        verticalLabelRotation={30}
                                      />

                                    </View>
                                  </View>
                                </View>
                              </View>

                            </ScrollView>
                          </View>
                          : null}{item.no == 6 ?
                            <View>
                              <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                <View>
                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                </View>
                              </View>
                              <View>
                                <View style={{ marginTop: 20 }}></View>
                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                              </View>
                              <ScrollView horizontal={true}>

                                <View style={styles.cardin1}>
                                  <View style={styles.container} >
                                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                                      <Text style={{ fontSize: 18 }}>
                                        ตารางคะแนนจากการเล่นเกมส์
                                  </Text>
                                    </View>
                                    <View style={{ margin: 10 }}>
                                      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                        <Rows data={this.state.tableData} textStyle={styles.text} />
                                      </Table>
                                    </View>
                                  </View>
                                </View>

                                <View style={styles.cardin1}>
                                  <View style={{ marginTop: 10, marginLeft: 10 }}>
                                    <View style={{ alignItems: 'center' }}>
                                      <View style={styles.card1}>
                                        <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                          ข้อมูลการเล่นเกมส์วันนี้
                                      </Text>
                                        <ProgressChart
                                          style={{ borderRadius: 15, marginTop: 30 }}
                                          data={data}
                                          width={325}
                                          height={160}
                                          strokeWidth={16}
                                          radius={32}
                                          chartConfig={chartConfig}
                                          hideLegend={false}
                                        />

                                      </View>
                                    </View>
                                  </View>
                                </View>

                                <View style={styles.cardin1}>
                                  <View style={{ marginTop: 10, marginLeft: 10 }}>
                                    <View style={{ alignItems: 'center' }}>
                                      <View style={styles.card1}>
                                        <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                          ข้อมูลการเล่นเกมส์ของเดือนนี้
                                        </Text>
                                        <BarChart
                                          style={graphStyle}
                                          data={databar}
                                          width={325}
                                          height={240}
                                          yAxisLabel=""
                                          chartConfig={chartConfig}
                                          verticalLabelRotation={30}
                                        />

                                      </View>
                                    </View>
                                  </View>
                                </View>

                              </ScrollView>
                            </View>
                            : null}{item.no == 7 ?
                              <View>
                                <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                  <View>
                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                  </View>
                                </View>
                                <View>
                                  <View style={{ marginTop: 20 }}></View>
                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                </View>
                                <ScrollView horizontal={true}>

                                  <View style={styles.cardin1}>
                                    <View style={styles.container} >
                                      <View style={{ alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ fontSize: 18 }}>
                                          ตารางคะแนนจากการเล่นเกมส์
                                    </Text>
                                      </View>
                                      <View style={{ margin: 10 }}>
                                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                          <Rows data={this.state.tableData} textStyle={styles.text} />
                                        </Table>
                                      </View>
                                    </View>
                                  </View>

                                  <View style={styles.cardin1}>
                                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                                      <View style={{ alignItems: 'center' }}>
                                        <View style={styles.card1}>
                                          <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                            ข้อมูลการเล่นเกมส์วันนี้
                                        </Text>
                                          <ProgressChart
                                            style={{ borderRadius: 15, marginTop: 30 }}
                                            data={data}
                                            width={325}
                                            height={160}
                                            strokeWidth={16}
                                            radius={32}
                                            chartConfig={chartConfig}
                                            hideLegend={false}
                                          />

                                        </View>
                                      </View>
                                    </View>
                                  </View>

                                  <View style={styles.cardin1}>
                                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                                      <View style={{ alignItems: 'center' }}>
                                        <View style={styles.card1}>
                                          <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                            ข้อมูลการเล่นเกมส์ของเดือนนี้
                                          </Text>
                                          <BarChart
                                            style={graphStyle}
                                            data={databar}
                                            width={325}
                                            height={240}
                                            yAxisLabel=""
                                            chartConfig={chartConfig}
                                            verticalLabelRotation={30}
                                          />

                                        </View>
                                      </View>
                                    </View>
                                  </View>

                                </ScrollView>
                              </View>
                              : null}{item.no == 8 ?
                                <View>
                                  <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                    <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                    <View>
                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                    </View>
                                  </View>
                                  <View>
                                    <View style={{ marginTop: 20 }}></View>
                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                  </View>
                                  <ScrollView horizontal={true}>

                                    <View style={styles.cardin1}>
                                      <View style={styles.container} >
                                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                                          <Text style={{ fontSize: 18 }}>
                                            ตารางคะแนนจากการเล่นเกมส์
                                      </Text>
                                        </View>
                                        <View style={{ margin: 10 }}>
                                          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                            <Rows data={this.state.tableData} textStyle={styles.text} />
                                          </Table>
                                        </View>
                                      </View>
                                    </View>

                                    <View style={styles.cardin1}>
                                      <View style={{ marginTop: 10, marginLeft: 10 }}>
                                        <View style={{ alignItems: 'center' }}>
                                          <View style={styles.card1}>
                                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                              ข้อมูลการเล่นเกมส์วันนี้
                                          </Text>
                                            <ProgressChart
                                              style={{ borderRadius: 15, marginTop: 30 }}
                                              data={data}
                                              width={325}
                                              height={160}
                                              strokeWidth={16}
                                              radius={32}
                                              chartConfig={chartConfig}
                                              hideLegend={false}
                                            />

                                          </View>
                                        </View>
                                      </View>
                                    </View>

                                    <View style={styles.cardin1}>
                                      <View style={{ marginTop: 10, marginLeft: 10 }}>
                                        <View style={{ alignItems: 'center' }}>
                                          <View style={styles.card1}>
                                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                              ข้อมูลการเล่นเกมส์ของเดือนนี้
                                            </Text>
                                            <BarChart
                                              style={graphStyle}
                                              data={databar}
                                              width={325}
                                              height={240}
                                              yAxisLabel=""
                                              chartConfig={chartConfig}
                                              verticalLabelRotation={30}
                                            />

                                          </View>
                                        </View>
                                      </View>
                                    </View>

                                  </ScrollView>
                                </View>
                                : null}{item.no == 9 ?
                                  <View>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                      <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                      <View>
                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                      </View>
                                    </View>
                                    <View>
                                      <View style={{ marginTop: 20 }}></View>
                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                    </View>
                                    <ScrollView horizontal={true}>

                                      <View style={styles.cardin1}>
                                        <View style={styles.container} >
                                          <View style={{ alignItems: 'center', marginTop: 10 }}>
                                            <Text style={{ fontSize: 18 }}>
                                              ตารางคะแนนจากการเล่นเกมส์
                                        </Text>
                                          </View>
                                          <View style={{ margin: 10 }}>
                                            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                              <Rows data={this.state.tableData} textStyle={styles.text} />
                                            </Table>
                                          </View>
                                        </View>
                                      </View>

                                      <View style={styles.cardin1}>
                                        <View style={{ marginTop: 10, marginLeft: 10 }}>
                                          <View style={{ alignItems: 'center' }}>
                                            <View style={styles.card1}>
                                              <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                ข้อมูลการเล่นเกมส์วันนี้
                                            </Text>
                                              <ProgressChart
                                                style={{ borderRadius: 15, marginTop: 30 }}
                                                data={data}
                                                width={325}
                                                height={160}
                                                strokeWidth={16}
                                                radius={32}
                                                chartConfig={chartConfig}
                                                hideLegend={false}
                                              />

                                            </View>
                                          </View>
                                        </View>
                                      </View>

                                      <View style={styles.cardin1}>
                                        <View style={{ marginTop: 10, marginLeft: 10 }}>
                                          <View style={{ alignItems: 'center' }}>
                                            <View style={styles.card1}>
                                              <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                ข้อมูลการเล่นเกมส์ของเดือนนี้
                                              </Text>
                                              <BarChart
                                                style={graphStyle}
                                                data={databar}
                                                width={325}
                                                height={240}
                                                yAxisLabel=""
                                                chartConfig={chartConfig}
                                                verticalLabelRotation={30}
                                              />

                                            </View>
                                          </View>
                                        </View>
                                      </View>

                                    </ScrollView>
                                  </View>
                                  : null}{item.no == 10 ?
                                    <View>
                                      <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                        <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                        <View>
                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                        </View>
                                      </View>
                                      <View>
                                        <View style={{ marginTop: 20 }}></View>
                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                      </View>
                                      <ScrollView horizontal={true}>

                                        <View style={styles.cardin1}>
                                          <View style={styles.container} >
                                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                              <Text style={{ fontSize: 18 }}>
                                                ตารางคะแนนจากการเล่นเกมส์
                                          </Text>
                                            </View>
                                            <View style={{ margin: 10 }}>
                                              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                <Rows data={this.state.tableData} textStyle={styles.text} />
                                              </Table>
                                            </View>
                                          </View>
                                        </View>

                                        <View style={styles.cardin1}>
                                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                                            <View style={{ alignItems: 'center' }}>
                                              <View style={styles.card1}>
                                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                  ข้อมูลการเล่นเกมส์วันนี้
                                              </Text>
                                                <ProgressChart
                                                  style={{ borderRadius: 15, marginTop: 30 }}
                                                  data={data}
                                                  width={325}
                                                  height={160}
                                                  strokeWidth={16}
                                                  radius={32}
                                                  chartConfig={chartConfig}
                                                  hideLegend={false}
                                                />

                                              </View>
                                            </View>
                                          </View>
                                        </View>

                                        <View style={styles.cardin1}>
                                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                                            <View style={{ alignItems: 'center' }}>
                                              <View style={styles.card1}>
                                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                  ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                </Text>
                                                <BarChart
                                                  style={graphStyle}
                                                  data={databar}
                                                  width={325}
                                                  height={240}
                                                  yAxisLabel=""
                                                  chartConfig={chartConfig}
                                                  verticalLabelRotation={30}
                                                />

                                              </View>
                                            </View>
                                          </View>
                                        </View>

                                      </ScrollView>
                                    </View>
                                    : null}{item.no == 11 ?
                                      <View>
                                        <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                          <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                          <View>
                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                          </View>
                                        </View>
                                        <View>
                                          <View style={{ marginTop: 20 }}></View>
                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                        </View>
                                        <ScrollView horizontal={true}>

                                          <View style={styles.cardin1}>
                                            <View style={styles.container} >
                                              <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                <Text style={{ fontSize: 18 }}>
                                                  ตารางคะแนนจากการเล่นเกมส์
                                            </Text>
                                              </View>
                                              <View style={{ margin: 10 }}>
                                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                  <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                  <Rows data={this.state.tableData} textStyle={styles.text} />
                                                </Table>
                                              </View>
                                            </View>
                                          </View>

                                          <View style={styles.cardin1}>
                                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                                              <View style={{ alignItems: 'center' }}>
                                                <View style={styles.card1}>
                                                  <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                    ข้อมูลการเล่นเกมส์วันนี้
                                                </Text>
                                                  <ProgressChart
                                                    style={{ borderRadius: 15, marginTop: 30 }}
                                                    data={data}
                                                    width={325}
                                                    height={160}
                                                    strokeWidth={16}
                                                    radius={32}
                                                    chartConfig={chartConfig}
                                                    hideLegend={false}
                                                  />

                                                </View>
                                              </View>
                                            </View>
                                          </View>

                                          <View style={styles.cardin1}>
                                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                                              <View style={{ alignItems: 'center' }}>
                                                <View style={styles.card1}>
                                                  <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                    ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                  </Text>
                                                  <BarChart
                                                    style={graphStyle}
                                                    data={databar}
                                                    width={325}
                                                    height={240}
                                                    yAxisLabel=""
                                                    chartConfig={chartConfig}
                                                    verticalLabelRotation={30}
                                                  />

                                                </View>
                                              </View>
                                            </View>
                                          </View>

                                        </ScrollView>
                                      </View>
                                      : null}{item.no == 12 ?
                                        <View>
                                          <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                            <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                            <View>
                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                            </View>
                                          </View>
                                          <View>
                                            <View style={{ marginTop: 20 }}></View>
                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                          </View>
                                          <ScrollView horizontal={true}>

                                            <View style={styles.cardin1}>
                                              <View style={styles.container} >
                                                <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                  <Text style={{ fontSize: 18 }}>
                                                    ตารางคะแนนจากการเล่นเกมส์
                                              </Text>
                                                </View>
                                                <View style={{ margin: 10 }}>
                                                  <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                    <Rows data={this.state.tableData} textStyle={styles.text} />
                                                  </Table>
                                                </View>
                                              </View>
                                            </View>

                                            <View style={styles.cardin1}>
                                              <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                <View style={{ alignItems: 'center' }}>
                                                  <View style={styles.card1}>
                                                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                      ข้อมูลการเล่นเกมส์วันนี้
                                                  </Text>
                                                    <ProgressChart
                                                      style={{ borderRadius: 15, marginTop: 30 }}
                                                      data={data}
                                                      width={325}
                                                      height={160}
                                                      strokeWidth={16}
                                                      radius={32}
                                                      chartConfig={chartConfig}
                                                      hideLegend={false}
                                                    />

                                                  </View>
                                                </View>
                                              </View>
                                            </View>

                                            <View style={styles.cardin1}>
                                              <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                <View style={{ alignItems: 'center' }}>
                                                  <View style={styles.card1}>
                                                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                      ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                    </Text>
                                                    <BarChart
                                                      style={graphStyle}
                                                      data={databar}
                                                      width={325}
                                                      height={240}
                                                      yAxisLabel=""
                                                      chartConfig={chartConfig}
                                                      verticalLabelRotation={30}
                                                    />

                                                  </View>
                                                </View>
                                              </View>
                                            </View>

                                          </ScrollView>
                                        </View>
                                        : null}{item.no == 13 ?
                                          <View>
                                            <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                              <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                              <View>
                                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                              </View>
                                            </View>
                                            <View>
                                              <View style={{ marginTop: 20 }}></View>
                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                            </View>
                                            <ScrollView horizontal={true}>

                                              <View style={styles.cardin1}>
                                                <View style={styles.container} >
                                                  <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                    <Text style={{ fontSize: 18 }}>
                                                      ตารางคะแนนจากการเล่นเกมส์
                                                </Text>
                                                  </View>
                                                  <View style={{ margin: 10 }}>
                                                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                      <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                      <Rows data={this.state.tableData} textStyle={styles.text} />
                                                    </Table>
                                                  </View>
                                                </View>
                                              </View>

                                              <View style={styles.cardin1}>
                                                <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                  <View style={{ alignItems: 'center' }}>
                                                    <View style={styles.card1}>
                                                      <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                        ข้อมูลการเล่นเกมส์วันนี้
                                                    </Text>
                                                      <ProgressChart
                                                        style={{ borderRadius: 15, marginTop: 30 }}
                                                        data={data}
                                                        width={325}
                                                        height={160}
                                                        strokeWidth={16}
                                                        radius={32}
                                                        chartConfig={chartConfig}
                                                        hideLegend={false}
                                                      />

                                                    </View>
                                                  </View>
                                                </View>
                                              </View>

                                              <View style={styles.cardin1}>
                                                <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                  <View style={{ alignItems: 'center' }}>
                                                    <View style={styles.card1}>
                                                      <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                        ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                      </Text>
                                                      <BarChart
                                                        style={graphStyle}
                                                        data={databar}
                                                        width={325}
                                                        height={240}
                                                        yAxisLabel=""
                                                        chartConfig={chartConfig}
                                                        verticalLabelRotation={30}
                                                      />

                                                    </View>
                                                  </View>
                                                </View>
                                              </View>

                                            </ScrollView>
                                          </View>
                                          : null}{item.no == 14 ?
                                            <View>
                                              <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                <View>
                                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                </View>
                                              </View>
                                              <View>
                                                <View style={{ marginTop: 20 }}></View>
                                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                              </View>
                                              <ScrollView horizontal={true}>

                                                <View style={styles.cardin1}>
                                                  <View style={styles.container} >
                                                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                      <Text style={{ fontSize: 18 }}>
                                                        ตารางคะแนนจากการเล่นเกมส์
                                                  </Text>
                                                    </View>
                                                    <View style={{ margin: 10 }}>
                                                      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                        <Rows data={this.state.tableData} textStyle={styles.text} />
                                                      </Table>
                                                    </View>
                                                  </View>
                                                </View>

                                                <View style={styles.cardin1}>
                                                  <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                    <View style={{ alignItems: 'center' }}>
                                                      <View style={styles.card1}>
                                                        <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                          ข้อมูลการเล่นเกมส์วันนี้
                                                      </Text>
                                                        <ProgressChart
                                                          style={{ borderRadius: 15, marginTop: 30 }}
                                                          data={data}
                                                          width={325}
                                                          height={160}
                                                          strokeWidth={16}
                                                          radius={32}
                                                          chartConfig={chartConfig}
                                                          hideLegend={false}
                                                        />

                                                      </View>
                                                    </View>
                                                  </View>
                                                </View>

                                                <View style={styles.cardin1}>
                                                  <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                    <View style={{ alignItems: 'center' }}>
                                                      <View style={styles.card1}>
                                                        <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                          ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                        </Text>
                                                        <BarChart
                                                          style={graphStyle}
                                                          data={databar}
                                                          width={325}
                                                          height={240}
                                                          yAxisLabel=""
                                                          chartConfig={chartConfig}
                                                          verticalLabelRotation={30}
                                                        />

                                                      </View>
                                                    </View>
                                                  </View>
                                                </View>

                                              </ScrollView>
                                            </View>
                                            : null}{item.no == 15 ?
                                              <View>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                  <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                  <View>
                                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                  </View>
                                                </View>
                                                <View>
                                                  <View style={{ marginTop: 20 }}></View>
                                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                  <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                                </View>
                                                <ScrollView horizontal={true}>

                                                  <View style={styles.cardin1}>
                                                    <View style={styles.container} >
                                                      <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                        <Text style={{ fontSize: 18 }}>
                                                          ตารางคะแนนจากการเล่นเกมส์
                                                    </Text>
                                                      </View>
                                                      <View style={{ margin: 10 }}>
                                                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                          <Rows data={this.state.tableData} textStyle={styles.text} />
                                                        </Table>
                                                      </View>
                                                    </View>
                                                  </View>

                                                  <View style={styles.cardin1}>
                                                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                      <View style={{ alignItems: 'center' }}>
                                                        <View style={styles.card1}>
                                                          <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                            ข้อมูลการเล่นเกมส์วันนี้
                                                        </Text>
                                                          <ProgressChart
                                                            style={{ borderRadius: 15, marginTop: 30 }}
                                                            data={data}
                                                            width={325}
                                                            height={160}
                                                            strokeWidth={16}
                                                            radius={32}
                                                            chartConfig={chartConfig}
                                                            hideLegend={false}
                                                          />

                                                        </View>
                                                      </View>
                                                    </View>
                                                  </View>

                                                  <View style={styles.cardin1}>
                                                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                      <View style={{ alignItems: 'center' }}>
                                                        <View style={styles.card1}>
                                                          <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                            ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                          </Text>
                                                          <BarChart
                                                            style={graphStyle}
                                                            data={databar}
                                                            width={325}
                                                            height={240}
                                                            yAxisLabel=""
                                                            chartConfig={chartConfig}
                                                            verticalLabelRotation={30}
                                                          />

                                                        </View>
                                                      </View>
                                                    </View>
                                                  </View>

                                                </ScrollView>
                                              </View>
                                              : null}{item.no == 16 ?
                                                <View>
                                                  <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                    <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                    <View>
                                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                    </View>
                                                  </View>
                                                  <View>
                                                    <View style={{ marginTop: 20 }}></View>
                                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                    <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                                  </View>
                                                  <ScrollView horizontal={true}>

                                                    <View style={styles.cardin1}>
                                                      <View style={styles.container} >
                                                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                          <Text style={{ fontSize: 18 }}>
                                                            ตารางคะแนนจากการเล่นเกมส์
                                                      </Text>
                                                        </View>
                                                        <View style={{ margin: 10 }}>
                                                          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                            <Rows data={this.state.tableData} textStyle={styles.text} />
                                                          </Table>
                                                        </View>
                                                      </View>
                                                    </View>

                                                    <View style={styles.cardin1}>
                                                      <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                        <View style={{ alignItems: 'center' }}>
                                                          <View style={styles.card1}>
                                                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                              ข้อมูลการเล่นเกมส์วันนี้
                                                          </Text>
                                                            <ProgressChart
                                                              style={{ borderRadius: 15, marginTop: 30 }}
                                                              data={data}
                                                              width={325}
                                                              height={160}
                                                              strokeWidth={16}
                                                              radius={32}
                                                              chartConfig={chartConfig}
                                                              hideLegend={false}
                                                            />

                                                          </View>
                                                        </View>
                                                      </View>
                                                    </View>

                                                    <View style={styles.cardin1}>
                                                      <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                        <View style={{ alignItems: 'center' }}>
                                                          <View style={styles.card1}>
                                                            <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                              ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                            </Text>
                                                            <BarChart
                                                              style={graphStyle}
                                                              data={databar}
                                                              width={325}
                                                              height={240}
                                                              yAxisLabel=""
                                                              chartConfig={chartConfig}
                                                              verticalLabelRotation={30}
                                                            />

                                                          </View>
                                                        </View>
                                                      </View>
                                                    </View>

                                                  </ScrollView>
                                                </View>
                                                : null}{item.no == 17 ?
                                                  <View>
                                                    <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                      <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                      <View>
                                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                      </View>
                                                    </View>
                                                    <View>
                                                      <View style={{ marginTop: 20 }}></View>
                                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                      <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                                    </View>
                                                    <ScrollView horizontal={true}>

                                                      <View style={styles.cardin1}>
                                                        <View style={styles.container} >
                                                          <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                            <Text style={{ fontSize: 18 }}>
                                                              ตารางคะแนนจากการเล่นเกมส์
                                                        </Text>
                                                          </View>
                                                          <View style={{ margin: 10 }}>
                                                            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                              <Rows data={this.state.tableData} textStyle={styles.text} />
                                                            </Table>
                                                          </View>
                                                        </View>
                                                      </View>

                                                      <View style={styles.cardin1}>
                                                        <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                          <View style={{ alignItems: 'center' }}>
                                                            <View style={styles.card1}>
                                                              <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                ข้อมูลการเล่นเกมส์วันนี้
                                                            </Text>
                                                              <ProgressChart
                                                                style={{ borderRadius: 15, marginTop: 30 }}
                                                                data={data}
                                                                width={325}
                                                                height={160}
                                                                strokeWidth={16}
                                                                radius={32}
                                                                chartConfig={chartConfig}
                                                                hideLegend={false}
                                                              />

                                                            </View>
                                                          </View>
                                                        </View>
                                                      </View>

                                                      <View style={styles.cardin1}>
                                                        <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                          <View style={{ alignItems: 'center' }}>
                                                            <View style={styles.card1}>
                                                              <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                              </Text>
                                                              <BarChart
                                                                style={graphStyle}
                                                                data={databar}
                                                                width={325}
                                                                height={240}
                                                                yAxisLabel=""
                                                                chartConfig={chartConfig}
                                                                verticalLabelRotation={30}
                                                              />

                                                            </View>
                                                          </View>
                                                        </View>
                                                      </View>

                                                    </ScrollView>
                                                  </View>
                                                  : null}{item.no == 18 ?
                                                    <View>
                                                      <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                        <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                        <View>
                                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                        </View>
                                                      </View>
                                                      <View>
                                                        <View style={{ marginTop: 20 }}></View>
                                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                        <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                                      </View>
                                                      <ScrollView horizontal={true}>

                                                        <View style={styles.cardin1}>
                                                          <View style={styles.container} >
                                                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                              <Text style={{ fontSize: 18 }}>
                                                                ตารางคะแนนจากการเล่นเกมส์
                                                          </Text>
                                                            </View>
                                                            <View style={{ margin: 10 }}>
                                                              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                                <Rows data={this.state.tableData} textStyle={styles.text} />
                                                              </Table>
                                                            </View>
                                                          </View>
                                                        </View>

                                                        <View style={styles.cardin1}>
                                                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                            <View style={{ alignItems: 'center' }}>
                                                              <View style={styles.card1}>
                                                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                  ข้อมูลการเล่นเกมส์วันนี้
                                                              </Text>
                                                                <ProgressChart
                                                                  style={{ borderRadius: 15, marginTop: 30 }}
                                                                  data={data}
                                                                  width={325}
                                                                  height={160}
                                                                  strokeWidth={16}
                                                                  radius={32}
                                                                  chartConfig={chartConfig}
                                                                  hideLegend={false}
                                                                />

                                                              </View>
                                                            </View>
                                                          </View>
                                                        </View>

                                                        <View style={styles.cardin1}>
                                                          <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                            <View style={{ alignItems: 'center' }}>
                                                              <View style={styles.card1}>
                                                                <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                  ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                                </Text>
                                                                <BarChart
                                                                  style={graphStyle}
                                                                  data={databar}
                                                                  width={325}
                                                                  height={240}
                                                                  yAxisLabel=""
                                                                  chartConfig={chartConfig}
                                                                  verticalLabelRotation={30}
                                                                />

                                                              </View>
                                                            </View>
                                                          </View>
                                                        </View>

                                                      </ScrollView>
                                                    </View>
                                                    : null}{item.no == 19 ?
                                                      <View>
                                                        <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                          <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                          <View>
                                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                          </View>
                                                        </View>
                                                        <View>
                                                          <View style={{ marginTop: 20 }}></View>
                                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                          <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                                        </View>
                                                        <ScrollView horizontal={true}>

                                                          <View style={styles.cardin1}>
                                                            <View style={styles.container} >
                                                              <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                                <Text style={{ fontSize: 18 }}>
                                                                  ตารางคะแนนจากการเล่นเกมส์
                                                            </Text>
                                                              </View>
                                                              <View style={{ margin: 10 }}>
                                                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                                  <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                                  <Rows data={this.state.tableData} textStyle={styles.text} />
                                                                </Table>
                                                              </View>
                                                            </View>
                                                          </View>

                                                          <View style={styles.cardin1}>
                                                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                              <View style={{ alignItems: 'center' }}>
                                                                <View style={styles.card1}>
                                                                  <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                    ข้อมูลการเล่นเกมส์วันนี้
                                                                </Text>
                                                                  <ProgressChart
                                                                    style={{ borderRadius: 15, marginTop: 30 }}
                                                                    data={data}
                                                                    width={325}
                                                                    height={160}
                                                                    strokeWidth={16}
                                                                    radius={32}
                                                                    chartConfig={chartConfig}
                                                                    hideLegend={false}
                                                                  />

                                                                </View>
                                                              </View>
                                                            </View>
                                                          </View>

                                                          <View style={styles.cardin1}>
                                                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                              <View style={{ alignItems: 'center' }}>
                                                                <View style={styles.card1}>
                                                                  <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                    ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                                  </Text>
                                                                  <BarChart
                                                                    style={graphStyle}
                                                                    data={databar}
                                                                    width={325}
                                                                    height={240}
                                                                    yAxisLabel=""
                                                                    chartConfig={chartConfig}
                                                                    verticalLabelRotation={30}
                                                                  />

                                                                </View>
                                                              </View>
                                                            </View>
                                                          </View>

                                                        </ScrollView>
                                                      </View>
                                                      : null}{item.no == 20 ?
                                                        <View>
                                                          <View style={{ flexDirection: 'row', backgroundColor: '#1687a7', borderRadius: 15 }}>
                                                            <Image style={{ height: 80, width: 80 }} source={require('../img/1.png')} />
                                                            <View>
                                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
                                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อายุ {item.age} ปี</Text>
                                                              <Text style={{ color: '#000', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>อัฟเดท : 09/06/63</Text>
                                                            </View>
                                                          </View>
                                                          <View>
                                                            <View style={{ marginTop: 20 }}></View>
                                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>ที่อยู่ปัจจุบัน : {item.address}</Text>
                                                            <Text style={{ color: '#000', marginLeft: 20, marginTop: 10 }}>อาการป่วย : {item.disease} </Text>
                                                          </View>
                                                          <ScrollView horizontal={true}>

                                                            <View style={styles.cardin1}>
                                                              <View style={styles.container} >
                                                                <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                                  <Text style={{ fontSize: 18 }}>
                                                                    ตารางคะแนนจากการเล่นเกมส์
                                                              </Text>
                                                                </View>
                                                                <View style={{ margin: 10 }}>
                                                                  <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                                                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                                                    <Rows data={this.state.tableData} textStyle={styles.text} />
                                                                  </Table>
                                                                </View>
                                                              </View>
                                                            </View>

                                                            <View style={styles.cardin1}>
                                                              <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center' }}>
                                                                  <View style={styles.card1}>
                                                                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                      ข้อมูลการเล่นเกมส์วันนี้
                                                                  </Text>
                                                                    <ProgressChart
                                                                      style={{ borderRadius: 15, marginTop: 30 }}
                                                                      data={data}
                                                                      width={325}
                                                                      height={160}
                                                                      strokeWidth={16}
                                                                      radius={32}
                                                                      chartConfig={chartConfig}
                                                                      hideLegend={false}
                                                                    />

                                                                  </View>
                                                                </View>
                                                              </View>
                                                            </View>

                                                            <View style={styles.cardin1}>
                                                              <View style={{ marginTop: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center' }}>
                                                                  <View style={styles.card1}>
                                                                    <Text style={{ fontSize: 18, alignSelf: 'center' }}>
                                                                      ข้อมูลการเล่นเกมส์ของเดือนนี้
                                                                    </Text>
                                                                    <BarChart
                                                                      style={graphStyle}
                                                                      data={databar}
                                                                      width={325}
                                                                      height={240}
                                                                      yAxisLabel=""
                                                                      chartConfig={chartConfig}
                                                                      verticalLabelRotation={30}
                                                                    />

                                                                  </View>
                                                                </View>
                                                              </View>
                                                            </View>

                                                          </ScrollView>
                                                        </View>
                                                        : null}
                </ScrollView>
              </View>
            }
          />

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({

  cards: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
  },

  cardin: {
    alignItems: 'center',
    width: 390,
    height: 510,
    marginTop: 20,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,

  },
  cardin1: {
    alignItems: 'center',
    width: 350,
    height: 300,
    marginTop: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,

  },

  buttons: {
    alignSelf: 'center',
    width: 350,
    height: 100,
    marginTop: 30,
    backgroundColor: "#1687a7",
    borderRadius: 15,
    elevation: 10,
  },
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },

});

const data = {
  labels: ["คะแนน", "เวลา", "วันที่"], // optional
  data: [0.56, 0.52, 0.17]
};
const chartConfig = {

  backgroundGradientFrom: "#FFF",
  backgroundGradientFromOpacity: 5,
  backgroundGradientTo: "#FFF",
  backgroundGradientToOpacity: 5,
  color: (opacity = 1) => `rgba(70 , 52, 37, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.8,
  useShadowColorFromDataset: false // optional

};

const databar = {
  labels: ["10", "11", "12", "13", "14", "15"],
  datasets: [
    {
      data: [68, 52, 90, 85, 31, 57]
    }
  ]
};
