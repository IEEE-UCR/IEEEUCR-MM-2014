module Nyan_Mouse (





);
     nyan_mouse u0 (
        .clk_clk                                           (<connected-to-clk_clk>),                                           //                               clk.clk
        .pio_0_external_connection_in_port                 (<connected-to-pio_0_external_connection_in_port>),                 //         pio_0_external_connection.in_port
        .pio_0_external_connection_out_port                (<connected-to-pio_0_external_connection_out_port>),                //                                  .out_port
        .uart_0_external_connection_rxd                    (<connected-to-uart_0_external_connection_rxd>),                    //        uart_0_external_connection.rxd
        .uart_0_external_connection_txd                    (<connected-to-uart_0_external_connection_txd>),                    //                                  .txd
        .adc_spi_MISO                                      (<connected-to-adc_spi_MISO>),                                      //                           adc_spi.MISO
        .adc_spi_MOSI                                      (<connected-to-adc_spi_MOSI>),                                      //                                  .MOSI
        .adc_spi_SCLK                                      (<connected-to-adc_spi_SCLK>),                                      //                                  .SCLK
        .adc_spi_SS_n                                      (<connected-to-adc_spi_SS_n>),                                      //                                  .SS_n
        .encoder_in_external_connection_export             (<connected-to-encoder_in_external_connection_export>),             //    encoder_in_external_connection.export
        .motor_control_external_connection_export          (<connected-to-motor_control_external_connection_export>),          // motor_control_external_connection.export
        .dac_master_clk_clk                                (<connected-to-dac_master_clk_clk>),                                //                    dac_master_clk.clk
        .dac_i2s_clk_clk                                   (<connected-to-dac_i2s_clk_clk>),                                   //                       dac_i2s_clk.clk
        .magic_gpio_clk_clk                                (<connected-to-magic_gpio_clk_clk>),                                //                    magic_gpio_clk.clk
        .dac_l_external_connection_export                  (<connected-to-dac_l_external_connection_export>),                  //         dac_l_external_connection.export
        .dac_r_external_connection_export                  (<connected-to-dac_r_external_connection_export>),                  //         dac_r_external_connection.export
        .i2c_master_0_conduit_end_writeresponserequest_n   (<connected-to-i2c_master_0_conduit_end_writeresponserequest_n>),   //          i2c_master_0_conduit_end.writeresponserequest_n
        .i2c_master_0_conduit_end_1_writeresponsevalid_n   (<connected-to-i2c_master_0_conduit_end_1_writeresponsevalid_n>),   //        i2c_master_0_conduit_end_1.writeresponsevalid_n
        .i2c_master_0_conduit_end_2_writeresponsevalid_n   (<connected-to-i2c_master_0_conduit_end_2_writeresponsevalid_n>),   //        i2c_master_0_conduit_end_2.writeresponsevalid_n
        .i2c_master_0_conduit_end_3_writeresponserequest_n (<connected-to-i2c_master_0_conduit_end_3_writeresponserequest_n>), //        i2c_master_0_conduit_end_3.writeresponserequest_n
        .i2c_master_0_conduit_end_4_writeresponsevalid_n   (<connected-to-i2c_master_0_conduit_end_4_writeresponsevalid_n>),   //        i2c_master_0_conduit_end_4.writeresponsevalid_n
        .i2c_master_0_conduit_end_5_writeresponsevalid_n   (<connected-to-i2c_master_0_conduit_end_5_writeresponsevalid_n>)    //        i2c_master_0_conduit_end_5.writeresponsevalid_n
    );
endmodule