class ItemsController < ApplicationController
  skip_before_action :authorized_user

  # GET /items
  def index
    # binding.break
    if !params[:category_key]
      items = Item.all
    else
      items = Item.where("#{params[:category_key]}=?", params[:value])
    end
    render json: items
  end

  # GET /items/1
  def show
    item = Item.find(params[:id])
    render json: item
  end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_item
    #   item = Item.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:team, :sport, :category, :era, :brand, :made_in, :game_used, :purchase_price, :asking_price, :details, :league, :image_url, :for_sale, :user_id)
    end
end
