<script>
import { Bar } from 'vue-chartjs';
export default {
  extends: Bar,
  data() {
    return {
      chartdata: {
        datacollection: {
          labels: ['HTML5', 'CSS3', 'Javascript', 'ReactJS', 'VueJS', 'JSON', 'Wordpress', 'PHP', 'SQL'],
          datasets: [
            {
              backgroundColor: [
                '#f16529',
                '#379ad6',
                '#f1da4e',
                '#69d8fb',
                '#41B883',
                '#292929',
                '#0087BE',
                '#777bb3',
                '#fe0000'
              ],
              hoverBackgroundColor: [
                '#ffab87',
                '#94cdef',
                '#f4e797',
                '#b2ecff',
                '#92e8c1',
                '#848484',
                '#74d1f7',
                '#bfc2f2',
                '#ff6b6b'
              ],
              data: [90, 85, 75, 65, 75, 60, 85, 65, 60],
            }
          ],
        }
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return ' ' + tooltipItem.yLabel + ' %';
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
            }
          }]
        },
      }
    };
  },

  mounted () {
    this.renderChart(this.chartdata.datacollection, this.options)
  },
}
</script>

<style scoped>
</style>
